import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetFunctionalGroupsCommand implements EmdiCommand {
  name = 'GetFunctionalGroups';
  commandType = EmdiCommands.GetFunctionalGroups;
  class = EmdiClasses.Comms;
  includeCommands = false;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdComms xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
               <md:getFunctionalGroups md:includeCommands="${this.includeCommands}" />
           </md:mdComms>
        </md:mdMsg>`;
  }
}
