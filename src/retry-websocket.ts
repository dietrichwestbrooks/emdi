import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class RetryWebSocket {
  socket!: WebSocket;

  _message = new BehaviorSubject<MessageEvent | null>(null);
  _close = new BehaviorSubject<CloseEvent | null>(null);
  _error = new BehaviorSubject<Event | null>(null);

  constructor(
    private url: string,
    private timeout = 1500,
    private retries = 30,
    private interval = 1000
  ) {
    timeout = timeout || 1500;
    retries = retries || 0;
    interval = interval || 0;
  }

  get message(): Observable<MessageEvent> {
    return this._message.asObservable().pipe(
      filter(event => event != null),
      map(event => <MessageEvent>event)
    );
  }

  get close(): Observable<CloseEvent> {
    return this._close.asObservable().pipe(
      filter(event => event != null),
      map(event => <CloseEvent>event)
    );
  }

  get error(): Observable<Event> {
    return this._error.asObservable().pipe(
      filter(event => event != null),
      map(event => <Event>event)
    );
  }

  get readyState(): number {
    return this.socket.readyState;
  }

  async open(): Promise<void> {
    this.socket = await this.openInternal(this.retries);
  }

  private openInternal(retries: number): Promise<WebSocket> {
    console.log('connecting to websocket! url: ' + this.url + ', remaining retries: ' + retries);

    let socket: any;

    return new Promise<WebSocket>((resolve, reject) => {
      try {
        const timer = setTimeout(() => {
          console.log('opening websocket timed out connecting to ' + this.url);
          rejectPromise();
        }, this.timeout);

        socket = new WebSocket(this.url);

        let opened = false;

        socket.onopen = () => {
          clearTimeout(timer);
          opened = true;
          console.log('websocket opened', this.url);
          resolve(socket);
        };

        socket.onerror = (event: Event) => {
          if (opened) {
            console.log('websocket error on connection to ' + this.url);
            this._error.next(event);
          }
        };

        socket.onmessage = (event: MessageEvent) => {
          if (opened) {
            this._message.next(event);
          }
        };

        socket.onclose = (event: CloseEvent) => {
          if (opened) {
            console.log('websocket closed to ', this.url);
            this._close.next(event);
          }
        };
      } catch (err) {
        reject(err);
      }

      const rejectPromise = () => {
        try {
          if (socket) {
            console.log('closing websocket connection to ' + this.url);
            socket.close();
          }

          if (retries <= 0) {
            reject(new Error('retries exhasuted'));
          } else {
            setTimeout(() => {
              this.openInternal(retries - 1).then(resolve, reject);
            }, this.interval);
          }
        } catch (err) {
          reject(err);
        }
      };
    });
  }

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {
    this.socket.send(data);
  }

  dispose() {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
    }
  }
}
