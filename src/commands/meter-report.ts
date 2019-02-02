import { EmdiEvent, EmdiEvents, EmdiClasses, EmdiResponses, EmdiResponse } from './emdi-command';
import { MeterReportAckCommand } from './meter-report-ack';

export class MeterReportEvent implements EmdiEvent {
  name = 'MeterReport';
  eventType = EmdiEvents.MeterReport;
  class = EmdiClasses.Meters;
  sessionId!: number;
  ack = new MeterReportAckCommand();

  constructor(data: any) {}
}

export class MeterReportResponse implements EmdiResponse {
  name = 'MeterReport';
  responseType = EmdiResponses.MeterReport;
  class = EmdiClasses.Meters;
  sessionId!: number;

  constructor(data: string) {
    console.log('MeterReportResponse =', data);
  }
}
