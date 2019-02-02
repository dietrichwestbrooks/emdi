import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';
export declare class SetDeviceVisibleStateCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    deviceVisibleState: boolean;
    getXml(sessionId: number): string;
}
