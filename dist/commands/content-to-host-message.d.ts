import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';
export declare class ContentToHostMessageCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    instructionData: string;
    getXml(sessionId: number): string;
}
