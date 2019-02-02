import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';

export class MeterSubListResponse implements EmdiResponse {
  name = 'MeterSubList';
  responseType = EmdiResponses.MeterSubList;
  class = EmdiClasses.Meters;
  sessionId!: number;
  meterSubscriptions: { name: string; text: string }[] = [];

  constructor(data: any) {
    console.log('MeterSubListResponse =', data);

    if (data['md:meterSubscription'] === undefined) {
      return;
    }

    for (const subs of data['md:meterSubscription']) {
      console.log('subscription =', subs);
      this.meterSubscriptions.push({
        name: subs['$']['md:meterName'],
        text: subs['$']['md:meterType'],
      });
    }
  }
}
