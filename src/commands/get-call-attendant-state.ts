import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetCallAttendantStateCommand implements EmdiCommand {
  name = 'GetCallAttendantState';
  commandType = EmdiCommands.GetCallAttendantState;
  class = EmdiClasses.Cabinet;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdCabinet xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:getCallAttendantState />
           </md:mdCabinet>
        </md:mdMsg>`;
  }
}
