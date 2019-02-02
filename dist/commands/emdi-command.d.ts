export declare enum EmdiClasses {
    Comms = 0,
    EventHandler = 1,
    Cabinet = 2,
    Meters = 3,
    ContentToContent = 4,
    Host = 5,
    Client = 6
}
export declare enum EmdiEvents {
    MeterReport = 0,
    EventReport = 1,
    ContentMessage = 2,
    HostToContentMessage = 3
}
export declare enum EmdiResponses {
    HeartbeatAck = 0,
    CommsOnLineAck = 1,
    FunctionalGroupList = 2,
    EventSubList = 3,
    MeterSubList = 4,
    ClearEventSubAck = 5,
    ContentMessageAck = 6,
    ContentToHostMessageAck = 7,
    ActiveContentList = 8,
    CabinetStatus = 9,
    CallAttendantStatus = 10,
    CardStatus = 11,
    DeviceVisibleStatus = 12,
    SupportedEventList = 13,
    SupportedMeterList = 14,
    LogContentEventAck = 15,
    MeterReport = 16,
    EgmId = 17
}
export declare enum EmdiCommands {
    ClearEventSub = 0,
    ClearMeterSub = 1,
    CommsOnLine = 2,
    ContentMessage = 3,
    ContentToHostMessage = 4,
    GetActiveContent = 5,
    GetCardState = 6,
    GetCabinetStatus = 7,
    GetCallAttendantState = 8,
    GetDeviceVisibleState = 9,
    GetEventSubList = 10,
    GetFunctionalGroups = 11,
    GetEgmId = 12,
    GetMeterSub = 13,
    GetMeterInfo = 14,
    GetSupportedMeterList = 15,
    GetSupportedEventList = 16,
    Heartbeat = 17,
    LogContentEvent = 18,
    SetCallAttendantState = 19,
    SetCardRemoved = 20,
    SetDeviceVisibleState = 21,
    SetEventSub = 22,
    SetMeterSub = 23,
    ContentMessageAck = 24,
    EventAck = 25,
    HostToContentMessageAck = 26,
    MeterReportAck = 27
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
export declare class EmdiError {
    constructor(error: number | string, cls: string);
    error: number | string;
    class: EmdiClasses;
}
export declare const availableMeters: (MeterSubscription & Display)[];
