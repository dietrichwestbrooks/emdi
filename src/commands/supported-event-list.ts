import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';

export class SupportedEventListResponse implements EmdiResponse {
  name = 'SupportedEventList';
  responseType = EmdiResponses.SupportedEventList;
  class = EmdiClasses.EventHandler;
  sessionId!: number;
  supportedEvents: { code: string; text: string }[] = [];

  constructor(data: any) {
    console.log('SupportedEventListResponse =', data);

    for (const event of data['md:supportedEvent']) {
      console.log('event =', event);
      this.supportedEvents.push({
        code: event['$']['md:eventCode'],
        text: event['$']['md:eventText'],
      });
    }
  }
}
