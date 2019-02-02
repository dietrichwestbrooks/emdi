import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';

export class ContentToHostMessageAckResponse implements EmdiResponse {
  name = 'ContentToHostMessageAck';
  responseType = EmdiResponses.ContentToHostMessageAck;
  class = EmdiClasses.Cabinet;
  sessionId!: number;
}
