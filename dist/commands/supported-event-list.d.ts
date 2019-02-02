import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';
export declare class SupportedEventListResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    supportedEvents: {
        code: string;
        text: string;
    }[];
    constructor(data: any);
}
