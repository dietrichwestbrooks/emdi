import { EmdiEvent, EmdiEvents, EmdiClasses, EmdiResponses, EmdiResponse } from './emdi-command';
import { MeterReportAckCommand } from './meter-report-ack';
export declare class MeterReportEvent implements EmdiEvent {
    name: string;
    eventType: EmdiEvents;
    class: EmdiClasses;
    sessionId: number;
    ack: MeterReportAckCommand;
    constructor(data: any);
}
export declare class MeterReportResponse implements EmdiResponse {
    name: string;
    responseType: EmdiResponses;
    class: EmdiClasses;
    sessionId: number;
    constructor(data: string);
}
