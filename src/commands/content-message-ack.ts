import {
  EmdiResponse,
  EmdiResponses,
  EmdiClasses,
  EmdiCommands,
  EmdiCommand,
} from './emdi-command';

export class ContentMessageAckCommand implements EmdiCommand {
  name = 'ContentMessageAck';
  commandType = EmdiCommands.ContentMessageAck;
  class = EmdiClasses.ContentToContent;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <cci:mdContentToContent xmlns:cci="http://www.gamingstandards.com/emdi/schemas/v1b/CCI"
           md:cmdType="response" md:sessionId="${sessionId}">
               <cci:contentMessageAck />
           </cci:mdContentToContent>
        </md:mdMsg>`;
  }
}

export class ContentMessageAckResponse implements EmdiResponse {
  name = 'ContentMessageAck';
  responseType = EmdiResponses.ContentMessageAck;
  class = EmdiClasses.ContentToContent;
  sessionId = 0;

  constructor(data: any) {
    console.log('ContentMessageAckResponse: data =', data);
  }
}
