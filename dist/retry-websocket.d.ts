import { BehaviorSubject, Observable } from 'rxjs';
export declare class RetryWebSocket {
    private url;
    private timeout;
    private retries;
    private interval;
    socket: WebSocket;
    _message: BehaviorSubject<MessageEvent | null>;
    _close: BehaviorSubject<CloseEvent | null>;
    _error: BehaviorSubject<Event | null>;
    constructor(url: string, timeout?: number, retries?: number, interval?: number);
    readonly message: Observable<MessageEvent>;
    readonly close: Observable<CloseEvent>;
    readonly error: Observable<Event>;
    readonly readyState: number;
    open(): Promise<void>;
    private openInternal;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    dispose(): void;
}
