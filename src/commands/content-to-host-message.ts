import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class ContentToHostMessageCommand implements EmdiCommand {
  name = 'ContentToHostMessage';
  commandType = EmdiCommands.ContentToHostMessage;
  class = EmdiClasses.Cabinet;
  instructionData!: string;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com" xmlns:hci="http://www.gamingstandards.com/emdi/schemas/v1b/HCI">
            <md:mdCabinet md:cmdType="request" md:sessionId="${sessionId}">
                <hci:contentToHostMessage>
                    <hci:instructionData>${btoa(this.instructionData)}</hci:instructionData>
                </hci:contentToHostMessage>
            </md:mdCabinet>
        </md:mdMsg>`;
  }
}
