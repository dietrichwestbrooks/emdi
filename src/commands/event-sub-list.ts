import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';

export class EventSubListResponse implements EmdiResponse {
  name = 'EventSubList';
  responseType = EmdiResponses.EventSubList;
  class = EmdiClasses.EventHandler;
  sessionId!: number;
  eventSubscriptions: { code: string }[] = [];

  constructor(data: any) {
    console.log('EventSubListResponse =', data);

    if (data['md:eventSubscription'] === undefined) {
      return;
    }

    for (const subs of data['md:eventSubscription']) {
      console.log('subscription =', subs);
      this.eventSubscriptions.push({
        code: subs['$']['md:eventCode'],
      });
    }
  }
}
