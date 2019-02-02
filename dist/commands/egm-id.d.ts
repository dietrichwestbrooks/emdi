import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';
export declare class EgmIdResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    egmId: string;
    constructor(data: any);
}
