import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';
export declare class DeviceVisibleStatusResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    deviceVisibleState: boolean;
    constructor(data: any);
}
