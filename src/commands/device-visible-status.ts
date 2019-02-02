import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';

export class DeviceVisibleStatusResponse implements EmdiResponse {
  name = 'DeviceVisibleStatus';
  responseType = EmdiResponses.DeviceVisibleStatus;
  class = EmdiClasses.Cabinet;
  sessionId!: number;
  deviceVisibleState = false;

  constructor(data: any) {
    console.log('DeviceVisibleStatusResponse =', data);

    if (data['$']) {
      this.deviceVisibleState = data['$']['md:deviceVisibleState'] !== 'false'; // Defaults to true
    } else {
      this.deviceVisibleState = true;
    }
  }
}
