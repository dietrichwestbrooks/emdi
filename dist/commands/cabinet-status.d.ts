import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';
export declare class CabinetStatusResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    egmState: string;
    deviceClass: string;
    constructor(data: any);
}
