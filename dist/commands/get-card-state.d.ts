import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';
export declare class GetCardStateCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    getXml(sessionId: number): string;
}
