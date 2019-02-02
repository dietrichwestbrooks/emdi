import { EmdiCommand, EmdiCommands, EmdiClasses, EventSubscription } from './emdi-command';
export declare class SetEventSubCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    eventSubscriptions: EventSubscription[];
    getXml(sessionId: number): string;
    private getEventSubs;
}
