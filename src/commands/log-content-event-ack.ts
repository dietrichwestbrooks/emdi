import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';

export class LogContentEventAckResponse implements EmdiResponse {
  name = 'LogContentEventAck';
  responseType = EmdiResponses.LogContentEventAck;
  class = EmdiClasses.EventHandler;
  sessionId!: number;
}
