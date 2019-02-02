import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class CommsOnLineCommand implements EmdiCommand {
  name = 'CommsOnLine';
  commandType = EmdiCommands.CommsOnLine;
  class = EmdiClasses.Comms;
  requiresInput = true;
  accessToken!: number;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdComms xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:commsOnLine md:mdAccessToken="${this.accessToken}" />
           </md:mdComms>
        </md:mdMsg>`;
  }
}
