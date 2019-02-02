import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';

export class CallAttendantStatusResponse implements EmdiResponse {
  name = 'CallAttendantStatus';
  responseType = EmdiResponses.CallAttendantStatus;
  class = EmdiClasses.Cabinet;
  sessionId!: number;
  callAttendantActive = false;

  constructor(data: any) {
    console.log('CallAttendantStatusResponse =', data);

    this.callAttendantActive = data['$']['md:callAttendantActive'] === 'true';
  }
}
