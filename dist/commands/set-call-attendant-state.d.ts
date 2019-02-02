import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';
export declare class SetCallAttendantStateCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    enable: boolean;
    getXml(sessionId: number): string;
}
