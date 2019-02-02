import { EmdiCommand, EmdiCommands, EmdiClasses } from './emdi-command';

export class GetActiveContentCommand implements EmdiCommand {
  name = 'GetActiveContent';
  commandType = EmdiCommands.GetActiveContent;
  class = EmdiClasses.ContentToContent;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <cci:mdContentToContent xmlns:cci="http://www.gamingstandards.com/emdi/schemas/v1b/CCI"
           md:cmdType="request" md:sessionId="${sessionId}">
               <cci:getActiveContent />
           </cci:mdContentToContent>
        </md:mdMsg>`;
  }
}
