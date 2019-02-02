import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';

export class CardStatusResponse implements EmdiResponse {
  name = 'CardStatus';
  responseType = EmdiResponses.CardStatus;
  class = EmdiClasses.Cabinet;
  sessionId!: number;
  cardIn = false;
  idReaderType: string;
  idNumber: string;
  idValidExpired: boolean;

  constructor(data: any) {
    console.log('CardStatusResponse =', data);

    this.cardIn = data['$']['md:cardIn'] === 'true';
    this.idReaderType = data['$']['md:idReaderType'];
    this.idNumber = data['$']['md:idNumber'];
    this.idValidExpired = data['$']['md:idValidExpired'] !== 'false'; // Defaults to true
  }
}
