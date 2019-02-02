import { EmdiCommand, EmdiCommands, EmdiClasses, EventSubscription, Display } from './emdi-command';

export class SetEventSubCommand implements EmdiCommand {
  name = 'SetEventSub';
  commandType = EmdiCommands.SetEventSub;
  class = EmdiClasses.Comms;
  eventSubscriptions: EventSubscription[] = [];

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
           <md:mdEventHandler xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
                <md:setEventSub>
                    ${this.getEventSubs()}
                </md:setEventSub>
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
