import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';

export class HeartbeatAckResponse implements EmdiResponse {
  name = 'HeartbeatAck';
  responseType = EmdiResponses.HeartbeatAck;
  class = EmdiClasses.Comms;
  sessionId!: number;
}
