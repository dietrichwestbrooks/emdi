import { EmdiCommand, EmdiCommands, EmdiClasses, MeterSubscription } from './emdi-command';
export declare class SetMeterSubCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    meterSubscriptions: MeterSubscription[];
    getXml(sessionId: number): string;
    private getMeterSubs;
}
