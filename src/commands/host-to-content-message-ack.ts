import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class HostToContentMessageAckCommand implements EmdiCommand {
  name = 'HostToContentMessageAck';
  commandType = EmdiCommands.HostToContentMessageAck;
  class = EmdiClasses.Cabinet;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdCabinet md:cmdType="response" md:sessionId="${sessionId}">
               <hci:hostToContentMessageAck xmlns:hci="http://www.gamingstandards.com/emdi/schemas/v1b/HCI" />
           </md:mdCabinet>
        </md:mdMsg>`;
  }
}
