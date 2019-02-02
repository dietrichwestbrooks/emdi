import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';
export declare class GetFunctionalGroupsCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    includeCommands: boolean;
    getXml(sessionId: number): string;
}
