import { EmdiResponse, EmdiResponses, EmdiClasses } from './emdi-command';

export class FunctionalGroupListResponse implements EmdiResponse {
  name = 'FunctionalGroupList';
  responseType = EmdiResponses.FunctionalGroupList;
  class = EmdiClasses.Comms;
  sessionId!: number;
  groups: { name: string; commands: { name: string }[] }[] = [];

  constructor(data: any) {
    console.log('FunctionalGroupList =', data);

    for (const group of data['md:functionalGroup']) {
      console.log('group =', group);

      const groupItem: any = {
        name: group['$']['md:groupName'],
      };

      this.groups.push(groupItem);

      if (group['md:commandItem'] === undefined) {
        continue;
      }

      for (const command of group['md:commandItem']) {
        console.log('command =', command);
        groupItem.commands.push({
          name: command['$']['md:commandName'],
        });
      }
    }
  }
}
