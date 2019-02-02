export enum EmdiClasses {
  Comms,
  EventHandler,
  Cabinet,
  Meters,
  ContentToContent,
  Host,
  Client,
}

export enum EmdiEvents {
  MeterReport,
  EventReport,
  ContentMessage,
  HostToContentMessage,
}

export enum EmdiResponses {
  HeartbeatAck,
  CommsOnLineAck,
  FunctionalGroupList,
  EventSubList,
  MeterSubList,
  ClearEventSubAck,
  ContentMessageAck,
  ContentToHostMessageAck,
  ActiveContentList,
  CabinetStatus,
  CallAttendantStatus,
  CardStatus,
  DeviceVisibleStatus,
  SupportedEventList,
  SupportedMeterList,
  LogContentEventAck,
  MeterReport,
  EgmId,
}

export enum EmdiCommands {
  ClearEventSub,
  ClearMeterSub,
  CommsOnLine,
  ContentMessage,
  ContentToHostMessage,
  GetActiveContent,
  GetCardState,
  GetCabinetStatus,
  GetCallAttendantState,
  GetDeviceVisibleState,
  GetEventSubList,
  GetFunctionalGroups,
  GetEgmId,
  GetMeterSub,
  GetMeterInfo,
  GetSupportedMeterList,
  GetSupportedEventList,
  Heartbeat,
  LogContentEvent,
  SetCallAttendantState,
  SetCardRemoved,
  SetDeviceVisibleState,
  SetEventSub,
  SetMeterSub,
  ContentMessageAck,
  EventAck,
  HostToContentMessageAck,
  MeterReportAck,
}

export declare type MeterType = 'IGT_count' | 'IGT_amount' | 'IGT_percent';

export interface MeterSubscription {
  name: string;
  type: MeterType;
}

export interface EventSubscription {
  code: string;
}

export interface Display {
  display: string;
}

export interface EmdiCommand {
  name: string;
  commandType: EmdiCommands;
  class: EmdiClasses;
  getXml(sessionId: number): string;
}

export interface EmdiResponse {
  name: string;
  responseType: EmdiResponses;
  class: EmdiClasses;
  sessionId: number;
}

export interface EmdiEvent {
  name: string;
  eventType: EmdiEvents;
  class: EmdiClasses;
  ack: EmdiCommand;
  sessionId: number;
}

export class EmdiError {
  constructor(error: number | string, cls: string) {
    this.error = error;
    this.class = EmdiClasses[cls as keyof typeof EmdiClasses];
  }

  error: number | string;
  class: EmdiClasses;
}

export const availableMeters: (MeterSubscription & Display)[] = [
  { name: 'IGT_playerPointBalance', type: 'IGT_count', display: 'Player Point Balance' },
  { name: 'IGT_playerPointCountdown', type: 'IGT_count', display: 'Player Point Countdown' },
  { name: 'IGT_playerSessionPoints', type: 'IGT_count', display: 'Player Session Points' },
  { name: 'IGT_wagerMatchBalance', type: 'IGT_count', display: 'Total Wager Match' },
  { name: 'G2S_playerCashableAmt', type: 'IGT_amount', display: 'Player Cash Amount' },
  { name: 'G2S_playerPromoAmt', type: 'IGT_amount', display: 'Player Promo Amount' },
  { name: 'G2S_playerNonCashAmt', type: 'IGT_amount', display: 'Player Non-Cash Amount' },
];
