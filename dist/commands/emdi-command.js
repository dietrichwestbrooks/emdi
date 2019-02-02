"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmdiClasses;
(function (EmdiClasses) {
    EmdiClasses[EmdiClasses["Comms"] = 0] = "Comms";
    EmdiClasses[EmdiClasses["EventHandler"] = 1] = "EventHandler";
    EmdiClasses[EmdiClasses["Cabinet"] = 2] = "Cabinet";
    EmdiClasses[EmdiClasses["Meters"] = 3] = "Meters";
    EmdiClasses[EmdiClasses["ContentToContent"] = 4] = "ContentToContent";
    EmdiClasses[EmdiClasses["Host"] = 5] = "Host";
    EmdiClasses[EmdiClasses["Client"] = 6] = "Client";
})(EmdiClasses = exports.EmdiClasses || (exports.EmdiClasses = {}));
var EmdiEvents;
(function (EmdiEvents) {
    EmdiEvents[EmdiEvents["MeterReport"] = 0] = "MeterReport";
    EmdiEvents[EmdiEvents["EventReport"] = 1] = "EventReport";
    EmdiEvents[EmdiEvents["ContentMessage"] = 2] = "ContentMessage";
    EmdiEvents[EmdiEvents["HostToContentMessage"] = 3] = "HostToContentMessage";
})(EmdiEvents = exports.EmdiEvents || (exports.EmdiEvents = {}));
var EmdiResponses;
(function (EmdiResponses) {
    EmdiResponses[EmdiResponses["HeartbeatAck"] = 0] = "HeartbeatAck";
    EmdiResponses[EmdiResponses["CommsOnLineAck"] = 1] = "CommsOnLineAck";
    EmdiResponses[EmdiResponses["FunctionalGroupList"] = 2] = "FunctionalGroupList";
    EmdiResponses[EmdiResponses["EventSubList"] = 3] = "EventSubList";
    EmdiResponses[EmdiResponses["MeterSubList"] = 4] = "MeterSubList";
    EmdiResponses[EmdiResponses["ClearEventSubAck"] = 5] = "ClearEventSubAck";
    EmdiResponses[EmdiResponses["ContentMessageAck"] = 6] = "ContentMessageAck";
    EmdiResponses[EmdiResponses["ContentToHostMessageAck"] = 7] = "ContentToHostMessageAck";
    EmdiResponses[EmdiResponses["ActiveContentList"] = 8] = "ActiveContentList";
    EmdiResponses[EmdiResponses["CabinetStatus"] = 9] = "CabinetStatus";
    EmdiResponses[EmdiResponses["CallAttendantStatus"] = 10] = "CallAttendantStatus";
    EmdiResponses[EmdiResponses["CardStatus"] = 11] = "CardStatus";
    EmdiResponses[EmdiResponses["DeviceVisibleStatus"] = 12] = "DeviceVisibleStatus";
    EmdiResponses[EmdiResponses["SupportedEventList"] = 13] = "SupportedEventList";
    EmdiResponses[EmdiResponses["SupportedMeterList"] = 14] = "SupportedMeterList";
    EmdiResponses[EmdiResponses["LogContentEventAck"] = 15] = "LogContentEventAck";
    EmdiResponses[EmdiResponses["MeterReport"] = 16] = "MeterReport";
    EmdiResponses[EmdiResponses["EgmId"] = 17] = "EgmId";
})(EmdiResponses = exports.EmdiResponses || (exports.EmdiResponses = {}));
var EmdiCommands;
(function (EmdiCommands) {
    EmdiCommands[EmdiCommands["ClearEventSub"] = 0] = "ClearEventSub";
    EmdiCommands[EmdiCommands["ClearMeterSub"] = 1] = "ClearMeterSub";
    EmdiCommands[EmdiCommands["CommsOnLine"] = 2] = "CommsOnLine";
    EmdiCommands[EmdiCommands["ContentMessage"] = 3] = "ContentMessage";
    EmdiCommands[EmdiCommands["ContentToHostMessage"] = 4] = "ContentToHostMessage";
    EmdiCommands[EmdiCommands["GetActiveContent"] = 5] = "GetActiveContent";
    EmdiCommands[EmdiCommands["GetCardState"] = 6] = "GetCardState";
    EmdiCommands[EmdiCommands["GetCabinetStatus"] = 7] = "GetCabinetStatus";
    EmdiCommands[EmdiCommands["GetCallAttendantState"] = 8] = "GetCallAttendantState";
    EmdiCommands[EmdiCommands["GetDeviceVisibleState"] = 9] = "GetDeviceVisibleState";
    EmdiCommands[EmdiCommands["GetEventSubList"] = 10] = "GetEventSubList";
    EmdiCommands[EmdiCommands["GetFunctionalGroups"] = 11] = "GetFunctionalGroups";
    EmdiCommands[EmdiCommands["GetEgmId"] = 12] = "GetEgmId";
    EmdiCommands[EmdiCommands["GetMeterSub"] = 13] = "GetMeterSub";
    EmdiCommands[EmdiCommands["GetMeterInfo"] = 14] = "GetMeterInfo";
    EmdiCommands[EmdiCommands["GetSupportedMeterList"] = 15] = "GetSupportedMeterList";
    EmdiCommands[EmdiCommands["GetSupportedEventList"] = 16] = "GetSupportedEventList";
    EmdiCommands[EmdiCommands["Heartbeat"] = 17] = "Heartbeat";
    EmdiCommands[EmdiCommands["LogContentEvent"] = 18] = "LogContentEvent";
    EmdiCommands[EmdiCommands["SetCallAttendantState"] = 19] = "SetCallAttendantState";
    EmdiCommands[EmdiCommands["SetCardRemoved"] = 20] = "SetCardRemoved";
    EmdiCommands[EmdiCommands["SetDeviceVisibleState"] = 21] = "SetDeviceVisibleState";
    EmdiCommands[EmdiCommands["SetEventSub"] = 22] = "SetEventSub";
    EmdiCommands[EmdiCommands["SetMeterSub"] = 23] = "SetMeterSub";
    EmdiCommands[EmdiCommands["ContentMessageAck"] = 24] = "ContentMessageAck";
    EmdiCommands[EmdiCommands["EventAck"] = 25] = "EventAck";
    EmdiCommands[EmdiCommands["HostToContentMessageAck"] = 26] = "HostToContentMessageAck";
    EmdiCommands[EmdiCommands["MeterReportAck"] = 27] = "MeterReportAck";
})(EmdiCommands = exports.EmdiCommands || (exports.EmdiCommands = {}));
var EmdiError = /** @class */ (function () {
    function EmdiError(error, cls) {
        this.error = error;
        this.class = EmdiClasses[cls];
    }
    return EmdiError;
}());
exports.EmdiError = EmdiError;
exports.availableMeters = [
    { name: 'IGT_playerPointBalance', type: 'IGT_count', display: 'Player Point Balance' },
    { name: 'IGT_playerPointCountdown', type: 'IGT_count', display: 'Player Point Countdown' },
    { name: 'IGT_playerSessionPoints', type: 'IGT_count', display: 'Player Session Points' },
    { name: 'IGT_wagerMatchBalance', type: 'IGT_count', display: 'Total Wager Match' },
    { name: 'G2S_playerCashableAmt', type: 'IGT_amount', display: 'Player Cash Amount' },
    { name: 'G2S_playerPromoAmt', type: 'IGT_amount', display: 'Player Promo Amount' },
    { name: 'G2S_playerNonCashAmt', type: 'IGT_amount', display: 'Player Non-Cash Amount' },
];
