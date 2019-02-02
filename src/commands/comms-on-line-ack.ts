import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';

export class CommsOnLineAckResponse implements EmdiResponse {
  name = 'CommsOnLineAck';
  responseType = EmdiResponses.CommsOnLineAck;
  class = EmdiClasses.Comms;
  sessionId!: number;
  sessionValid = false;

  constructor(data: any) {
    console.log('CommsOnLineAck: data =', data);
    this.sessionValid = data['$']['md:sessionValid'] === 'true';
  }
}
