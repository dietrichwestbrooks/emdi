import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetCardStateCommand implements EmdiCommand {
  name = 'GetCardState';
  commandType = EmdiCommands.GetCardState;
  class = EmdiClasses.Cabinet;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
            <md:mdCabinet xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
                <md:getCardState />
            </md:mdCabinet>
        </md:mdMsg>`;
  }
}
