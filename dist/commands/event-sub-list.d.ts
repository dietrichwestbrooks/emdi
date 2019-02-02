import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';
export declare class EventSubListResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    eventSubscriptions: {
        code: string;
    }[];
    constructor(data: any);
}
