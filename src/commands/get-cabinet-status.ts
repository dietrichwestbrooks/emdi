import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetCabinetStatusCommand implements EmdiCommand {
  name = 'GetCabinetStatus';
  commandType = EmdiCommands.GetCabinetStatus;
  class = EmdiClasses.Cabinet;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com" xmlns:plc="http://www.gamingstandards.com/emdi/schemas/v1b/PLC">
           <md:mdCabinet md:cmdType="request" md:sessionId="${sessionId}">
               <plc:getCabinetStatus />
           </md:mdCabinet>
        </md:mdMsg>`;
  }
}
