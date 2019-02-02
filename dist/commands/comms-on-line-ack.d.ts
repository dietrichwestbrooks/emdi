import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';
export declare class CommsOnLineAckResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    sessionValid: boolean;
    constructor(data: any);
}
