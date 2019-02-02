import { EmdiEvent, EmdiEvents, EmdiClasses } from './emdi-command';
import { HostToContentMessageAckCommand } from './host-to-content-message-ack';
export declare class HostToContentMessageEvent implements EmdiEvent {
    name: string;
    eventType: EmdiEvents;
    class: EmdiClasses;
    sessionId: number;
    ack: HostToContentMessageAckCommand;
    instructionData: string[];
    constructor(data: any);
}
