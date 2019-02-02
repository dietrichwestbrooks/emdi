import { EmdiResponse, EmdiResponses, EmdiClasses, EmdiCommands, EmdiCommand } from './emdi-command';
export declare class ContentMessageAckCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    getXml(sessionId: number): string;
}
export declare class ContentMessageAckResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    constructor(data: any);
}
