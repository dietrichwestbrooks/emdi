import { EmdiEvent, EmdiEvents, EmdiClasses } from './emdi-command';
import { EventAckCommand } from './event-ack';

export class EventReportEvent implements EmdiEvent {
  name = 'EventReport';
  eventType = EmdiEvents.EventReport;
  class = EmdiClasses.EventHandler;
  ack = new EventAckCommand();
  sessionId!: number;
  eventItems: { code: string; item: any }[] = [];

  constructor(data: any) {
    console.log('EventReportEvent =', data);

    if (data['md:eventItem'] === undefined) {
      return;
    }

    for (const item of data['md:eventItem']) {
      console.log('item =', item);

      const eventItem: any = {
        code: item['$']['md:eventCode'],
      };

      if (eventItem.code === 'G2S_CBE101') {
        if (item['md:cabinetStatus'][0]['$']['plc:localeId']) {
          eventItem.item = { localeId: item['md:cabinetStatus'][0]['$']['plc:localeId'] };
        } else {
          eventItem.item = { localeId: 'en_US' };
        }
      }

      this.eventItems.push(eventItem);
    }
  }
}
