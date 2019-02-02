import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';

export class CabinetStatusResponse implements EmdiResponse {
  name = 'CabinetStatus';
  responseType = EmdiResponses.CabinetStatus;
  class = EmdiClasses.Cabinet;
  sessionId!: number;
  egmState: string;
  deviceClass: string;

  constructor(data: any) {
    console.log('CabinetStatusResponse =', data);

    this.egmState = data['$']['md:egmState'];
    this.deviceClass = data['$']['md:deviceClass'];
  }
}
