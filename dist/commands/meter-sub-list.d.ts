import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';
export declare class MeterSubListResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    meterSubscriptions: {
        name: string;
        text: string;
    }[];
    constructor(data: any);
}
