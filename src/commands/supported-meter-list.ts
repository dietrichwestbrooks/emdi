import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';

export class SupportedMeterListResponse implements EmdiResponse {
  name = 'SupportedMeterList';
  responseType = EmdiResponses.SupportedMeterList;
  class = EmdiClasses.Meters;
  sessionId!: number;
  supportedMeters: { name: string; type: string }[] = [];

  constructor(data: any) {
    console.log('SupportedMeterListResponse =', data);

    for (const meter of data['md:supportedMeter']) {
      console.log('meter =', meter);
      this.supportedMeters.push({
        name: meter['$']['md:meterName'],
        type: meter['$']['md:meterType'],
      });
    }
  }
}
