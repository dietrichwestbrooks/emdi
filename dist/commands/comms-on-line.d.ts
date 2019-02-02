import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';
export declare class CommsOnLineCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    requiresInput: boolean;
    accessToken: number;
    getXml(sessionId: number): string;
}
