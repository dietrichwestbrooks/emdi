import { EmdiResponse, EmdiClasses, EmdiResponses } from './emdi-command';

export class ClearEventSubAckResponse implements EmdiResponse {
  name = 'ClearEventSubAck';
  responseType = EmdiResponses.ClearEventSubAck;
  class = EmdiClasses.EventHandler;
  sessionId!: number;
}
