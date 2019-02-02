import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';
export declare class ClearEventSubAckResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
}
