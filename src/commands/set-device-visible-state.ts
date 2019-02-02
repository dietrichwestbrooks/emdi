import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class SetDeviceVisibleStateCommand implements EmdiCommand {
  name = 'SetDeviceVisibleState';
  commandType = EmdiCommands.SetDeviceVisibleState;
  class = EmdiClasses.Cabinet;
  deviceVisibleState = false;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdCabinet xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:setDeviceVisibleState md:deviceVisibleState="${this.deviceVisibleState}" />
           </md:mdCabinet>
        </md:mdMsg>`;
  }
}
