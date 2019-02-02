import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class EventAckCommand implements EmdiCommand {
  name = 'ContentMessageAck';
  commandType = EmdiCommands.EventAck;
  class = EmdiClasses.EventHandler;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdEventHandler md:cmdType="response" md:sessionId="${sessionId}">
               <md:eventAck />
           </md:mdEventHandler>
        </md:mdMsg>`;
  }
}
