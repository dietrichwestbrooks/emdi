import {
  EmdiCommand,
  EmdiCommands,
  EmdiClasses,
  MeterSubscription,
  Display,
  availableMeters,
} from './emdi-command';

export class GetMeterInfoCommand implements EmdiCommand {
  name = 'GetMeterInfo';
  commandType = EmdiCommands.GetMeterInfo;
  class = EmdiClasses.Comms;
  meterSubscriptions: MeterSubscription[] = [];

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
            <md:mdMeters xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
                <md:getMeterInfo>
                    ${this.getMeterSubs()}
                </md:getMeterInfo>
            </md:mdMeters>
        </md:mdMsg>`;
  }

  private getMeterSubs(): string {
    let xml = '';

    for (const subs of this.meterSubscriptions) {
      xml += `<md:meterSubscription md:meterName="${subs.name}" md:meterType="${subs.type}" />`;
    }

    return xml;
  }
}
