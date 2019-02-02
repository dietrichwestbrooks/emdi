import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';
export declare class SetCardRemovedCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    idReaderId: number;
    getXml(sessionId: number): string;
}
