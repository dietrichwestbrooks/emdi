import { EmdiEvent, EmdiEvents, EmdiClasses } from './emdi-command';
import { HostToContentMessageAckCommand } from './host-to-content-message-ack';

export class HostToContentMessageEvent implements EmdiEvent {
  name = 'HostToContentMessage';
  eventType = EmdiEvents.HostToContentMessage;
  class = EmdiClasses.Cabinet;
  sessionId!: number;
  ack = new HostToContentMessageAckCommand();
  instructionData: string[] = [];

  constructor(data: any) {
    console.log(`HostToContentMessageEvent = ${JSON.stringify(data)}`);

    for (const instructionData of data['hci:instructionData']) {
      const d = atob(instructionData);
      console.log(`instructionData = ${d}`);
      this.instructionData.push(d);
    }
  }
}
