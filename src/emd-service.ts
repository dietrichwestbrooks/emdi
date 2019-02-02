import { Observable, Subject, Observer, ReplaySubject, Subscription } from 'rxjs';
import { RetryWebSocket } from './retry-websocket';

const BASE_PORT = 1023;

export class EmdiService {
  constructor() {}

  connect(id: number): Subject<MessageEvent> {
    const port: number = BASE_PORT + id;
    const url = `ws://127.0.0.1:${port}`;

    console.log(`connecting to ${url}...`);

    return this.createSocketSubject(url);
  }

  private createSocketSubject(url: string): Subject<MessageEvent> {
    const replay = new ReplaySubject();

    const observable = Observable.create((obs: Observer<Event>) => {
      const socket = new RetryWebSocket(url);

      socket.message.subscribe(e => obs.next(e));
      socket.error.subscribe(e => obs.error(e));
      socket.close.subscribe(e => {
        if (e.wasClean) {
          obs.complete();
        } else {
          obs.error(e);
        }
      });

      let subscription: Subscription;

      socket.open().then(() => {
        subscription = replay.subscribe(data => {
          console.log('send', data);
          if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(data));
          }
        });
      });

      return () => {
        if (socket && socket.readyState === 1) {
          socket.dispose();
        }

        if (subscription) {
          subscription.unsubscribe();
        }
      };
    });

    return Subject.create(replay, observable);
  }
}

export const service = new EmdiService();
