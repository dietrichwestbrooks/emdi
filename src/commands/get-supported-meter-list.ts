import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetSupportedMeterListCommand implements EmdiCommand {
  name = 'GetSupportedMeterList';
  commandType = EmdiCommands.GetSupportedMeterList;
  class = EmdiClasses.Meters;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdMeters xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:getSupportedMeterList />
           </md:mdMeters>
        </md:mdMsg>`;
  }
}
