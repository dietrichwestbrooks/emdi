import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetSupportedEventListCommand implements EmdiCommand {
  name = 'GetSupportedEventList';
  commandType = EmdiCommands.GetSupportedEventList;
  class = EmdiClasses.EventHandler;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdEventHandler xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:getSupportedEventList />
           </md:mdEventHandler>
        </md:mdMsg>`;
  }
}
