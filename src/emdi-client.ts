import { EmdiService } from './emd-service';
import { EmdiCommand, EmdiResponse, EmdiEvent, EmdiError } from './commands/emdi-command';
import { EmdiFactory } from './emdi-factory';
import { CommsOnLineCommand } from './commands/comms-on-line';
import { CommsOnLineAckResponse } from './commands/comms-on-line-ack';

import { Subject, Observable, of, Subscription, BehaviorSubject } from 'rxjs';
import { map, timeout, catchError, filter } from 'rxjs/operators';

import * as utf8 from 'utf8';

import { SetDeviceVisibleStateCommand } from './commands/set-device-visible-state';
import { ContentMessageCommand } from './commands/content-message';
import {
  GetEgmIdCommand,
  EgmIdResponse,
  DeviceVisibleStatusResponse,
  SetEventSubCommand,
  EventSubListResponse,
} from './commands';

export class EmdiClient {
  private emdi: EmdiService;
  private sessionId = 1;
  private pulseInterval = 0;
  private heartbeat = <EmdiCommand>EmdiFactory.createCommand('Heartbeat');
  private isSessionValid = false;
  private messages!: Subject<string>;
  private accessToken = 0;

  private subscription!: Subscription;

  private _connected$ = new BehaviorSubject<boolean>(false);
  private _disconnected$ = new BehaviorSubject<boolean>(false);
  private _validated$ = new BehaviorSubject<boolean>(false);
  private _event$ = new BehaviorSubject<EmdiEvent | null>(null);
  private _response$ = new BehaviorSubject<EmdiResponse | null>(null);
  private _request$ = new BehaviorSubject<EmdiCommand | null>(null);
  private _error$ = new BehaviorSubject<EmdiError | null>(null);

  isConnected = false;
  deviceId = 0;
  egmId = '';

  constructor() {
    this.emdi = new EmdiService();
  }

  get error$() {
    return this._error$.asObservable().pipe(filter(e => e != null), map(e => <EmdiError>e));
  }

  get connected$() {
    return this._connected$.asObservable();
  }

  get disconnected$() {
    return this._disconnected$.asObservable();
  }

  get validated$() {
    return this._validated$.asObservable();
  }

  get event$() {
    return this._event$.asObservable().pipe(filter(e => e != null), map(e => <EmdiEvent>e));
  }

  get request$() {
    return this._request$.asObservable().pipe(filter(c => c != null), map(c => <EmdiCommand>c));
  }

  get response$() {
    return this._response$.asObservable().pipe(filter(r => r != null), map(r => <EmdiResponse>r));
  }

  connect(deviceId: number, accessToken: number): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      try {
        if (this.isConnected) {
          resolve(true);
          return;
        }

        this.messages = <Subject<string>>this.emdi.connect(deviceId).pipe(
          map(message => {
            const data = utf8.decode(message.data);
            return data;
          })
        );

        this.subscription = this.messages.subscribe(
          data => {
            this.onReceive(data);
          },
          (err: Error) => {
            this.onError(new EmdiError(err.message, 'Client'));
          },
          () => {
            console.log(`connection closed`);
            clearInterval(this.pulseInterval);
            this.isConnected = false;
            this.isSessionValid = false;
            this.onDisconnected();
          }
        );

        this.sessionId = 1;

        this.deviceId = deviceId;
        this.accessToken = accessToken;

        this.isConnected = true;
        this.onConnected();

        this.validate();

        resolve(true);
      } catch (err) {
        console.error(`error connecting to device ${deviceId}: ${err}`);
        resolve(false);
      }
    });
  }

  validate(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        if (this.isSessionValid) {
          resolve(true);
          return;
        }

        const command = <CommsOnLineCommand>EmdiFactory.createCommand('CommsOnLine');
        command.accessToken = parseInt(this.accessToken.toString(), 10);

        this.sendCommand(command)
          .then(response => {
            this.isSessionValid = (<CommsOnLineAckResponse>response).sessionValid;

            if (this.isSessionValid) {
              this.getEgmId().then(egmId => (this.egmId = egmId));
              this.onValidated();
            }

            resolve(this.isSessionValid);
          })
          .catch(error => {
            throw error;
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async disconnect(): Promise<void> {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  show(): Promise<boolean> {
    return this.setDeviceVisbleState(true);
  }

  hide(): Promise<boolean> {
    return this.setDeviceVisbleState(false);
  }

  getEgmId(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        const command = new GetEgmIdCommand();
        this.sendCommand(command)
          .then(response => resolve((<EgmIdResponse>response).egmId))
          .catch(error => {
            throw error;
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  sendContent(mediaDisplayId: number, contentId: number, contentData: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        const command = new ContentMessageCommand();
        command.mediaDisplayId = mediaDisplayId;
        command.contentId = contentId;
        command.contentData = contentData;

        this.sendCommand(command)
          .then(response => {
            resolve();
          })
          .catch(error => {
            throw error;
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  subscribe(...codes: string[]): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      try {
        const command = new SetEventSubCommand();

        codes.forEach(code => command.eventSubscriptions.push({ code: code }));

        this.sendCommand(command)
          .then(response => {
            const subs = (<EventSubListResponse>response).eventSubscriptions;
            resolve(subs.map(sub => sub.code));
          })
          .catch(error => {
            throw error;
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  private reconnect() {
    this.connect(this.deviceId, this.accessToken);
  }

  private onEvent(event: EmdiEvent) {
    this._event$.next(event);
  }

  private onResponse(response: EmdiResponse) {
    this._response$.next(response);
  }

  private onRequest(command: EmdiCommand) {
    this._request$.next(command);
  }

  private onError(error: EmdiError) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    clearInterval(this.pulseInterval);
    this._error$.next(error);
    this.isConnected = false;
    this.reconnect();
  }

  private onConnected() {
    this._connected$.next(true);
  }

  private onDisconnected() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    clearInterval(this.pulseInterval);
    this._disconnected$.next(true);
    this.isConnected = false;
    this.reconnect();
  }

  private onValidated() {
    this._validated$.next(true);
  }

  private sendCommand(command: EmdiCommand): Promise<EmdiResponse> {
    return new Promise<EmdiResponse>((resolve, reject) => {
      try {
        if (!this.isConnected) {
          throw new Error('No connection');
        }

        if (this.pulseInterval) {
          clearInterval(this.pulseInterval);
        }

        this.pulseInterval = setInterval(() => this.pulse(), 25000);

        this.onRequest(command);

        const sessionId = this.sessionId;

        let xml = command.getXml(sessionId);

        // console.log('default', this.hexEscape(xml));
        xml = utf8.encode(xml);
        // console.log('encoded', this.hexEscape(xml));

        this.messages.next(xml);

        this.sessionId++;

        const subscription = this.response$
          .pipe(
            filter(response => response.sessionId === sessionId),
            timeout(30000),
            catchError(() => of(new Error(`Response timeout: ${command.name}`)))
          )
          .subscribe(result => {
            if (result instanceof Error) {
              reject(result);
            } else {
              resolve(<EmdiResponse>result);
            }

            subscription.unsubscribe();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  private setDeviceVisbleState(state: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        const command = new SetDeviceVisibleStateCommand();
        command.deviceVisibleState = state;
        this.sendCommand(command)
          .then(response => {
            resolve((<DeviceVisibleStatusResponse>response).deviceVisibleState === state);
          })
          .catch(error => {
            throw error;
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  private sendResponse(event: EmdiEvent) {
    if (!this.isConnected) {
      throw new Error('No connection');
    }

    let xml = event.ack.getXml(event.sessionId);

    xml = utf8.encode(xml);

    this.messages.next(xml);
  }

  private pulse() {
    this.sendCommand(this.heartbeat);
  }

  private onReceive(xml: string) {
    console.log('receive: xml =', this.formatXml(xml));

    EmdiFactory.createResponseOrEvent(xml).then(result => {
      console.log('createResponseOrEvent', result);
      if (this.isErrorType(result)) {
        this.onError(<EmdiError>result);
      } else if (this.isResponseType(result)) {
        const response = <EmdiResponse>result;
        this.onResponse(response);
      } else if (this.isEventType(result)) {
        const event = <EmdiEvent>result;
        this.sendResponse(event);
        this.onEvent(event);
      }
    });
  }

  private isCommsOnLineAckType(value: any): value is CommsOnLineAckResponse {
    return (<CommsOnLineAckResponse>value).sessionValid !== undefined;
  }

  private isErrorType(value: EmdiResponse | EmdiEvent | EmdiError): value is EmdiError {
    return (<EmdiError>value).error !== undefined;
  }

  private isResponseType(value: EmdiResponse | EmdiEvent | EmdiError): value is EmdiResponse {
    return (<EmdiResponse>value).responseType !== undefined;
  }

  private isEventType(value: EmdiResponse | EmdiEvent | EmdiError): value is EmdiEvent {
    return (<EmdiEvent>value).eventType !== undefined;
  }

  private formatXml(xml: string) {
    let formatted = '';
    const reg = /(>)(<)(\/*)/g;
    let pad = 0;

    xml = xml.replace(reg, '$1\r\n$2$3');

    xml.split('\r\n').forEach((node: string) => {
      let indent = 0;
      if (node.match(/.+<\/\w[^>]*>$/)) {
        indent = 0;
      } else if (node.match(/^<\/\w/)) {
        if (pad !== 0) {
          pad -= 1;
        }
      } else if (node.match(/^<\w([^>]*[^\/])?>.*$/)) {
        indent = 1;
      } else {
        indent = 0;
      }

      let padding = '';
      for (let i = 0; i < pad; i++) {
        padding += '  ';
      }

      formatted += padding + node + '\r\n';
      pad += indent;
    });

    return formatted;
  }
}
