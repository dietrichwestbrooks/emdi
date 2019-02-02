import {
  EmdiCommand,
  EmdiCommands,
  EmdiClasses,
  MeterSubscription,
  Display,
  availableMeters,
} from './emdi-command';

export class SetMeterSubCommand implements EmdiCommand {
  name = 'SetMeterSub';
  commandType = EmdiCommands.SetMeterSub;
  class = EmdiClasses.Meters;
  meterSubscriptions: MeterSubscription[] = [];

  getXml(sessionId: number): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <md:mdMsg xmlns:md="http://mediaDisplay.igt.com">
            <md:mdMeters xmlns:md="http://mediaDisplay.igt.com" md:cmdType="request" md:sessionId="${sessionId}">
                <md:setMeterSub>
                    ${this.getMeterSubs()}
                </md:setMeterSub>
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
