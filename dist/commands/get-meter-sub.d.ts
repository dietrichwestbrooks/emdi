import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';
export declare class GetMeterSubCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    getXml(sessionId: number): string;
}
