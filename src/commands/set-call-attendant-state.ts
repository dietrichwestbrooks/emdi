import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class SetCallAttendantStateCommand implements EmdiCommand {
  name = 'SetCallAttendantState';
  commandType = EmdiCommands.SetCallAttendantState;
  class = EmdiClasses.Cabinet;
  enable = false;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdCabinet xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:setCallAttendantState md:enable="${this.enable}" />
           </md:mdCabinet>
        </md:mdMsg>`;
  }
}
