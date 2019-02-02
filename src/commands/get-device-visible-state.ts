import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetDeviceVisibleStateCommand implements EmdiCommand {
  name = 'GetDeviceVisibleState';
  commandType = EmdiCommands.GetDeviceVisibleState;
  class = EmdiClasses.Cabinet;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdCabinet xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:getDeviceVisibleState />
           </md:mdCabinet>
        </md:mdMsg>`;
  }
}
