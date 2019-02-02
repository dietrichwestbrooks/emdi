import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class MeterReportAckCommand implements EmdiCommand {
  name = 'MeterReportAck';
  commandType = EmdiCommands.MeterReportAck;
  class = EmdiClasses.Meters;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdMeters md:cmdType="response" md:sessionId="${sessionId}">
               <md:meterReportAck />
           </md:mdMeters>
        </md:mdMsg>`;
  }
}
