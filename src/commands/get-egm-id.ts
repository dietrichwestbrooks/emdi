import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetEgmIdCommand implements EmdiCommand {
  name = 'GetEgmId';
  commandType = EmdiCommands.GetEgmId;
  class = EmdiClasses.Host;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <hst:mdHost xmlns:hst="http://www.aristocrat.com/emdi/schemas/v1b/HST" md:cmdType="request" md:sessionId="${sessionId}">
               <hst:getEgmId />
           </hst:mdHost>
        </md:mdMsg>`;
  }
}
