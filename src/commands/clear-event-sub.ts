import { EmdiCommand, EmdiCommands, EmdiClasses, EventSubscription } from './emdi-command';

export class ClearEventSubCommand implements EmdiCommand {
  name = 'ClearEventSub';
  commandType = EmdiCommands.ClearEventSub;
  class = EmdiClasses.Comms;
  eventSubscriptions: EventSubscription[] = [];

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdEventHandler xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
                <md:clearEventSub>
                    ${this.getEventSubs()}
                </md:clearEventSub>
           </md:mdEventHandler>
        </md:mdMsg>`;
  }

  private getEventSubs(): string {
    let xml = '';

    for (const subs of this.eventSubscriptions) {
      xml += `<md:eventSubscription md:eventCode="${subs.code}" />`;
    }

    return xml;
  }
}
