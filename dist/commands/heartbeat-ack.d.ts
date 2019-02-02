import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';
export declare class HeartbeatAckResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
}
