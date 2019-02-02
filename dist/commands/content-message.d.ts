import { EmdiCommand, EmdiCommands, EmdiClasses, EmdiEvent, EmdiEvents } from './emdi-command';
import { ContentMessageAckCommand } from './content-message-ack';
export declare class ContentMessageCommand implements EmdiCommand {
    name: string;
    commandType: EmdiCommands;
    class: EmdiClasses;
    mediaDisplayId: number;
    contentId: number;
    contentData: string;
    getXml(sessionId: number): string;
}
export declare class ContentMessageEvent implements EmdiEvent {
    name: string;
    eventType: EmdiEvents;
    class: EmdiClasses;
    sessionId: number;
    ack: ContentMessageAckCommand;
    mediaDisplayId: number;
    contentId: number;
    contentData: string[];
    constructor(data: any);
}
