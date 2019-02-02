import { EmdiEvent, EmdiEvents, EmdiClasses } from './emdi-command';
import { EventAckCommand } from './event-ack';
export declare class EventReportEvent implements EmdiEvent {
    name: string;
    eventType: EmdiEvents;
    class: EmdiClasses;
    ack: EventAckCommand;
    sessionId: number;
    eventItems: {
        code: string;
        item: any;
    }[];
    constructor(data: any);
}
