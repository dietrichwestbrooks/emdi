import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class LogContentEventCommand implements EmdiCommand {
  name = 'LogContentEvent';
  commandType = EmdiCommands.LogContentEvent;
  class = EmdiClasses.EventHandler;
  contentName!: string;
  eventName!: string;
  eventDescription!: string;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdEventHandler xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:logContentEvent md:contentName="${this.contentName}" md:eventName="${
      this.eventName
    }" md:eventDescription="${this.eventDescription}" />
           </md:mdEventHandler>
        </md:mdMsg>`;
  }
}
