import { EmdiResponses, EmdiClasses, EmdiResponse } from './emdi-command';

export class ActiveContentListResponse implements EmdiResponse {
  name = 'ActiveContentList';
  responseType = EmdiResponses.ActiveContentList;
  class = EmdiClasses.ContentToContent;
  sessionId!: number;
  contentList: { contentId: number; displayId: number }[] = [];

  constructor(data: any) {
    console.log('ActiveContentListResponse =', data);

    if (data['cci:activeContent'] === undefined) {
      return;
    }

    for (const content of data['cci:activeContent']) {
      console.log('content =', content);

      this.contentList.push({
        contentId: content['$']['cci:contentId'],
        displayId: content['$']['cci:mediaDisplayId'],
      });
    }
  }
}
