import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';
export declare class LogContentEventCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    contentName: string;
    eventName: string;
    eventDescription: string;
    getXml(sessionId: number): string;
}
