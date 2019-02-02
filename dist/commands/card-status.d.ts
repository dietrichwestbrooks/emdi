import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';
export declare class CardStatusResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    cardIn: boolean;
    idReaderType: string;
    idNumber: string;
    idValidExpired: boolean;
    constructor(data: any);
}
