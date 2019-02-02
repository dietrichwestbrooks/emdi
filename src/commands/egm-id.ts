import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';

export class EgmIdResponse implements EmdiResponse {
  name = 'EgmId';
  responseType = EmdiResponses.EgmId;
  class = EmdiClasses.Host;
  sessionId!: number;
  egmId: string;

  constructor(data: any) {
    console.log('EgmIdResponse: data =', data);
    this.egmId = data['$']['hst:egmId'];
  }
}
