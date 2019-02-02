import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetMeterSubCommand implements EmdiCommand {
  name = 'GetMeterSub';
  commandType = EmdiCommands.GetMeterSub;
  class = EmdiClasses.Meters;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdMeters xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:getMeterSub />
           </md:mdMeters>
        </md:mdMsg>`;
  }
}
