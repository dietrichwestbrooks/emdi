import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';
export declare class ContentToHostMessageAckResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
}
