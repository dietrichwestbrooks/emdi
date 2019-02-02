import { EmdiCommand, EmdiCommands, EmdiClasses, EmdiEvent, EmdiEvents } from './emdi-command';
import { ContentMessageAckCommand } from './content-message-ack';

export class ContentMessageCommand implements EmdiCommand {
  name = 'ContentMessage';
  commandType = EmdiCommands.ContentMessage;
  class = EmdiClasses.ContentToContent;
  mediaDisplayId!: number;
  contentId!: number;
  contentData!: string;

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <cci:mdContentToContent xmlns:md="http://mediaDisplay.igt.com" xmlns:cci="http://www.gamingstandards.com/emdi/schemas/v1b/CCI"
           md:cmdType="request" md:sessionId="${sessionId}">
                <cci:contentMessage cci:mediaDisplayId="${this.mediaDisplayId}" cci:contentId="${
      this.contentId
    }">
                    <cci:contentData>${btoa(this.contentData)}</cci:contentData>
                </cci:contentMessage>
           </cci:mdContentToContent>
        </md:mdMsg>`;
  }
}

export class ContentMessageEvent implements EmdiEvent {
  name = 'ContentMessage';
  eventType = EmdiEvents.ContentMessage;
  class = EmdiClasses.ContentToContent;
  sessionId = 0;
  ack = new ContentMessageAckCommand();
  mediaDisplayId: number;
  contentId: number;
  contentData: string[] = [];

  constructor(data: any) {
    console.log('ContentMessageEvent =', data);

    this.mediaDisplayId = +data['cci:mediaDisplayId'];
    this.contentId = +data['cci:contentId'];

    for (const contentData of data['cci:contentData']) {
      console.log('contentData =', atob(contentData));
      this.contentData.push(atob(contentData));
    }
  }
}
