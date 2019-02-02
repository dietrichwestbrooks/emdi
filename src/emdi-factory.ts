import {
  EmdiCommand,
  EmdiResponse,
  EmdiEvent,
  EmdiCommands,
  EmdiResponses,
  EmdiEvents,
  HeartbeatCommand,
  HeartbeatAckResponse,
  CommsOnLineCommand,
  CommsOnLineAckResponse,
  GetFunctionalGroupsCommand,
  FunctionalGroupListResponse,
  EventReportEvent,
  MeterReportEvent,
  HostToContentMessageEvent,
  EmdiError,
  ClearEventSubCommand,
  ClearMeterSubCommand,
  ContentMessageCommand,
  ContentToHostMessageCommand,
  GetActiveContentCommand,
  GetCabinetStatusCommand,
  GetCallAttendantStateCommand,
  GetCardStateCommand,
  GetDeviceVisibleStateCommand,
  GetEventSubListCommand,
  GetMeterInfoCommand,
  GetMeterSubCommand,
  GetSupportedEventListCommand,
  GetSupportedMeterListCommand,
  LogContentEventCommand,
  SetCallAttendantStateCommand,
  SetCardRemovedCommand,
  SetDeviceVisibleStateCommand,
  SetEventSubCommand,
  SetMeterSubCommand,
  ContentMessageEvent,
  EventSubListResponse,
  ClearEventSubAckResponse,
  MeterSubListResponse,
  ContentMessageAckResponse,
  ContentToHostMessageAckResponse,
  CabinetStatusResponse,
  ActiveContentListResponse,
  LogContentEventAckResponse,
  MeterReportResponse,
  GetEgmIdCommand,
  EgmIdResponse,
} from './commands';
import * as xml2js from 'browser-xml2js';
import { DeviceVisibleStatusResponse } from './commands/device-visible-status';
import { CallAttendantStatusResponse } from './commands/call-attendant-status';
import { CardStatusResponse } from './commands/card-status';
import { SupportedMeterListResponse } from './commands/supported-meter-list';
import { SupportedEventListResponse } from './commands/supported-event-list';

interface ReceiveData {
  xml: string;
  class: string;
  type: string;
  sessionId: number;
  error: number;
  command: {
    name: string;
    data: string;
  };
}

export class EmdiFactory {
  static createCommand(command: string): EmdiCommand | undefined {
    switch (EmdiCommands[command as keyof typeof EmdiCommands]) {
      case EmdiCommands.Heartbeat:
        return new HeartbeatCommand();

      case EmdiCommands.CommsOnLine:
        return new CommsOnLineCommand();

      case EmdiCommands.GetFunctionalGroups:
        return new GetFunctionalGroupsCommand();

      case EmdiCommands.ClearEventSub:
        return new ClearEventSubCommand();

      case EmdiCommands.ClearMeterSub:
        return new ClearMeterSubCommand();

      case EmdiCommands.ContentMessage:
        return new ContentMessageCommand();

      case EmdiCommands.ContentToHostMessage:
        return new ContentToHostMessageCommand();

      case EmdiCommands.GetActiveContent:
        return new GetActiveContentCommand();

      case EmdiCommands.GetCabinetStatus:
        return new GetCabinetStatusCommand();

      case EmdiCommands.GetCallAttendantState:
        return new GetCallAttendantStateCommand();

      case EmdiCommands.GetCardState:
        return new GetCardStateCommand();

      case EmdiCommands.GetDeviceVisibleState:
        return new GetDeviceVisibleStateCommand();

      case EmdiCommands.GetEventSubList:
        return new GetEventSubListCommand();

      case EmdiCommands.GetMeterInfo:
        return new GetMeterInfoCommand();

      case EmdiCommands.GetMeterSub:
        return new GetMeterSubCommand();

      case EmdiCommands.GetSupportedEventList:
        return new GetSupportedEventListCommand();

      case EmdiCommands.GetSupportedMeterList:
        return new GetSupportedMeterListCommand();

      case EmdiCommands.LogContentEvent:
        return new LogContentEventCommand();

      case EmdiCommands.SetCallAttendantState:
        return new SetCallAttendantStateCommand();

      case EmdiCommands.SetCardRemoved:
        return new SetCardRemovedCommand();

      case EmdiCommands.SetDeviceVisibleState:
        return new SetDeviceVisibleStateCommand();

      case EmdiCommands.SetEventSub:
        return new SetEventSubCommand();

      case EmdiCommands.SetMeterSub:
        return new SetMeterSubCommand();

      case EmdiCommands.GetEgmId:
        return new GetEgmIdCommand();

      default:
        console.log('Not Found =', command);
    }

    return undefined;
  }

  static createResponseOrEvent(xml: string): Promise<EmdiResponse | EmdiEvent | EmdiError> {
    return new Promise<EmdiResponse | EmdiEvent | EmdiError>((resolve, reject) => {
      try {
        xml2js.parseString(xml, (error: any, json: any) => {
          if (error) {
            reject(error);
            return;
          }

          console.log('json data =', json);

          const cls = Object.keys(json['md:mdMsg'])[1];

          const data: any = {
            xml: xml,
            class: Object.keys(json['md:mdMsg'])[1].substr(5),
            type: json['md:mdMsg'][cls][0]['$']['md:cmdType'],
            sessionId: parseInt(json['md:mdMsg'][cls][0]['$']['md:sessionId'], 10),
            error: parseInt(json['md:mdMsg'][cls][0]['$']['md:errorCode'], 10),
          };

          const cmd = Object.keys(json['md:mdMsg'][cls][0])[1];

          if (cmd) {
            data.command = {
              name: cmd.substr(cmd.indexOf(':') + 1),
              data: json['md:mdMsg'][cls][0][cmd][0],
            };
          }

          if (data.error > 0) {
            resolve(new EmdiError(data.error, data.class));
          } else if (data.type === 'response') {
            const response = this.createResponse(data);
            response.sessionId = data.sessionId;
            resolve(response);
          } else if (data.type === 'request') {
            const event = this.createEvent(data);
            event.sessionId = data.sessionId;
            resolve(event);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  private static createEvent(data: ReceiveData): EmdiEvent {
    const event = this.toUpperCamelCase(data.command.name);
    console.log('event =', event);

    switch (EmdiEvents[event as keyof typeof EmdiEvents]) {
      case EmdiEvents.EventReport:
        return new EventReportEvent(data.command.data);

      case EmdiEvents.MeterReport:
        return new MeterReportEvent(data.command.data);

      case EmdiEvents.ContentMessage:
        return new ContentMessageEvent(data.command.data);

      case EmdiEvents.HostToContentMessage:
        return new HostToContentMessageEvent(data.command.data);

      default:
        throw new Error('Event not found');
    }
  }

  private static createResponse(data: ReceiveData): EmdiResponse {
    const response = this.toUpperCamelCase(data.command.name);
    console.log('response =', response);

    switch (EmdiResponses[response as keyof typeof EmdiResponses]) {
      case EmdiResponses.HeartbeatAck:
        return new HeartbeatAckResponse();

      case EmdiResponses.CommsOnLineAck:
        return new CommsOnLineAckResponse(data.command.data);

      case EmdiResponses.FunctionalGroupList:
        return new FunctionalGroupListResponse(data.command.data);

      case EmdiResponses.EventSubList:
        return new EventSubListResponse(data.command.data);

      case EmdiResponses.MeterSubList:
        return new MeterSubListResponse(data.command.data);

      case EmdiResponses.ClearEventSubAck:
        return new ClearEventSubAckResponse();

      case EmdiResponses.ContentMessageAck:
        return new ContentMessageAckResponse(data.command.data);

      case EmdiResponses.DeviceVisibleStatus:
        return new DeviceVisibleStatusResponse(data.command.data);

      case EmdiResponses.CallAttendantStatus:
        return new CallAttendantStatusResponse(data.command.data);

      case EmdiResponses.CardStatus:
        return new CardStatusResponse(data.command.data);

      case EmdiResponses.ContentToHostMessageAck:
        return new ContentToHostMessageAckResponse();

      case EmdiResponses.CabinetStatus:
        return new CabinetStatusResponse(data.command.data);

      case EmdiResponses.SupportedMeterList:
        return new SupportedMeterListResponse(data.command.data);

      case EmdiResponses.ActiveContentList:
        return new ActiveContentListResponse(data.command.data);

      case EmdiResponses.SupportedEventList:
        return new SupportedEventListResponse(data.command.data);

      case EmdiResponses.LogContentEventAck:
        return new LogContentEventAckResponse();

      case EmdiResponses.MeterReport:
        return new MeterReportResponse(data.command.data);

      case EmdiResponses.ActiveContentList:
        return new ActiveContentListResponse(data.command.data);

      case EmdiResponses.EgmId:
        return new EgmIdResponse(data.command.data);

      default:
        throw new Error('Response not found');
    }
  }

  private static toUpperCamelCase(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}
