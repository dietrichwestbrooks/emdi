import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';
export declare class CallAttendantStatusResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    callAttendantActive: boolean;
    constructor(data: any);
}
