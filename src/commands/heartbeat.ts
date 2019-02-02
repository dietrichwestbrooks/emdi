import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class HeartbeatCommand implements EmdiCommand {
  name = 'Heartbeat';
  commandType = EmdiCommands.Heartbeat;
  class = EmdiClasses.Comms;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdComms xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:heartbeat />
           </md:mdComms>
        </md:mdMsg>`;
  }
}
