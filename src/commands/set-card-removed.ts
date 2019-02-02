import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class SetCardRemovedCommand implements EmdiCommand {
  name = 'SetCardRemoved';
  commandType = EmdiCommands.SetCardRemoved;
  class = EmdiClasses.Comms;
  idReaderId = 1;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com" xmlns:cpc="http://www.gamingstandards.com/emdi/schemas/v1b/CPC">
            <md:mdCabinet md:cmdType="request" md:sessionId="${sessionId}">
                <cpc:setCardRemoved cpc:idReaderId="${this.idReaderId}" />
            </md:mdCabinet>
        </md:mdMsg>`;
  }
}
