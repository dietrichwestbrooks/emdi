import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';
export declare class SupportedMeterListResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    supportedMeters: {
        name: string;
        type: string;
    }[];
    constructor(data: any);
}
