"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands_1 = require("./commands");
var xml2js = require("browser-xml2js");
var device_visible_status_1 = require("./commands/device-visible-status");
var call_attendant_status_1 = require("./commands/call-attendant-status");
var card_status_1 = require("./commands/card-status");
var supported_meter_list_1 = require("./commands/supported-meter-list");
var supported_event_list_1 = require("./commands/supported-event-list");
var EmdiFactory = /** @class */ (function () {
    function EmdiFactory() {
    }
    EmdiFactory.createCommand = function (command) {
        switch (commands_1.EmdiCommands[command]) {
            case commands_1.EmdiCommands.Heartbeat:
                return new commands_1.HeartbeatCommand();
            case commands_1.EmdiCommands.CommsOnLine:
                return new commands_1.CommsOnLineCommand();
            case commands_1.EmdiCommands.GetFunctionalGroups:
                return new commands_1.GetFunctionalGroupsCommand();
            case commands_1.EmdiCommands.ClearEventSub:
                return new commands_1.ClearEventSubCommand();
            case commands_1.EmdiCommands.ClearMeterSub:
                return new commands_1.ClearMeterSubCommand();
            case commands_1.EmdiCommands.ContentMessage:
                return new commands_1.ContentMessageCommand();
            case commands_1.EmdiCommands.ContentToHostMessage:
                return new commands_1.ContentToHostMessageCommand();
            case commands_1.EmdiCommands.GetActiveContent:
                return new commands_1.GetActiveContentCommand();
            case commands_1.EmdiCommands.GetCabinetStatus:
                return new commands_1.GetCabinetStatusCommand();
            case commands_1.EmdiCommands.GetCallAttendantState:
                return new commands_1.GetCallAttendantStateCommand();
            case commands_1.EmdiCommands.GetCardState:
                return new commands_1.GetCardStateCommand();
            case commands_1.EmdiCommands.GetDeviceVisibleState:
                return new commands_1.GetDeviceVisibleStateCommand();
            case commands_1.EmdiCommands.GetEventSubList:
                return new commands_1.GetEventSubListCommand();
            case commands_1.EmdiCommands.GetMeterInfo:
                return new commands_1.GetMeterInfoCommand();
            case commands_1.EmdiCommands.GetMeterSub:
                return new commands_1.GetMeterSubCommand();
            case commands_1.EmdiCommands.GetSupportedEventList:
                return new commands_1.GetSupportedEventListCommand();
            case commands_1.EmdiCommands.GetSupportedMeterList:
                return new commands_1.GetSupportedMeterListCommand();
            case commands_1.EmdiCommands.LogContentEvent:
                return new commands_1.LogContentEventCommand();
            case commands_1.EmdiCommands.SetCallAttendantState:
                return new commands_1.SetCallAttendantStateCommand();
            case commands_1.EmdiCommands.SetCardRemoved:
                return new commands_1.SetCardRemovedCommand();
            case commands_1.EmdiCommands.SetDeviceVisibleState:
                return new commands_1.SetDeviceVisibleStateCommand();
            case commands_1.EmdiCommands.SetEventSub:
                return new commands_1.SetEventSubCommand();
            case commands_1.EmdiCommands.SetMeterSub:
                return new commands_1.SetMeterSubCommand();
            case commands_1.EmdiCommands.GetEgmId:
                return new commands_1.GetEgmIdCommand();
            default:
                console.log('Not Found =', command);
        }
        return undefined;
    };
    EmdiFactory.createResponseOrEvent = function (xml) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                xml2js.parseString(xml, function (error, json) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    console.log('json data =', json);
                    var cls = Object.keys(json['md:mdMsg'])[1];
                    var data = {
                        xml: xml,
                        class: Object.keys(json['md:mdMsg'])[1].substr(5),
                        type: json['md:mdMsg'][cls][0]['$']['md:cmdType'],
                        sessionId: parseInt(json['md:mdMsg'][cls][0]['$']['md:sessionId'], 10),
                        error: parseInt(json['md:mdMsg'][cls][0]['$']['md:errorCode'], 10),
                    };
                    var cmd = Object.keys(json['md:mdMsg'][cls][0])[1];
                    if (cmd) {
                        data.command = {
                            name: cmd.substr(cmd.indexOf(':') + 1),
                            data: json['md:mdMsg'][cls][0][cmd][0],
                        };
                    }
                    if (data.error > 0) {
                        resolve(new commands_1.EmdiError(data.error, data.class));
                    }
                    else if (data.type === 'response') {
                        var response = _this.createResponse(data);
                        response.sessionId = data.sessionId;
                        resolve(response);
                    }
                    else if (data.type === 'request') {
                        var event_1 = _this.createEvent(data);
                        event_1.sessionId = data.sessionId;
                        resolve(event_1);
                    }
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    EmdiFactory.createEvent = function (data) {
        var event = this.toUpperCamelCase(data.command.name);
        console.log('event =', event);
        switch (commands_1.EmdiEvents[event]) {
            case commands_1.EmdiEvents.EventReport:
                return new commands_1.EventReportEvent(data.command.data);
            case commands_1.EmdiEvents.MeterReport:
                return new commands_1.MeterReportEvent(data.command.data);
            case commands_1.EmdiEvents.ContentMessage:
                return new commands_1.ContentMessageEvent(data.command.data);
            case commands_1.EmdiEvents.HostToContentMessage:
                return new commands_1.HostToContentMessageEvent(data.command.data);
            default:
                throw new Error('Event not found');
        }
    };
    EmdiFactory.createResponse = function (data) {
        var response = this.toUpperCamelCase(data.command.name);
        console.log('response =', response);
        switch (commands_1.EmdiResponses[response]) {
            case commands_1.EmdiResponses.HeartbeatAck:
                return new commands_1.HeartbeatAckResponse();
            case commands_1.EmdiResponses.CommsOnLineAck:
                return new commands_1.CommsOnLineAckResponse(data.command.data);
            case commands_1.EmdiResponses.FunctionalGroupList:
                return new commands_1.FunctionalGroupListResponse(data.command.data);
            case commands_1.EmdiResponses.EventSubList:
                return new commands_1.EventSubListResponse(data.command.data);
            case commands_1.EmdiResponses.MeterSubList:
                return new commands_1.MeterSubListResponse(data.command.data);
            case commands_1.EmdiResponses.ClearEventSubAck:
                return new commands_1.ClearEventSubAckResponse();
            case commands_1.EmdiResponses.ContentMessageAck:
                return new commands_1.ContentMessageAckResponse(data.command.data);
            case commands_1.EmdiResponses.DeviceVisibleStatus:
                return new device_visible_status_1.DeviceVisibleStatusResponse(data.command.data);
            case commands_1.EmdiResponses.CallAttendantStatus:
                return new call_attendant_status_1.CallAttendantStatusResponse(data.command.data);
            case commands_1.EmdiResponses.CardStatus:
                return new card_status_1.CardStatusResponse(data.command.data);
            case commands_1.EmdiResponses.ContentToHostMessageAck:
                return new commands_1.ContentToHostMessageAckResponse();
            case commands_1.EmdiResponses.CabinetStatus:
                return new commands_1.CabinetStatusResponse(data.command.data);
            case commands_1.EmdiResponses.SupportedMeterList:
                return new supported_meter_list_1.SupportedMeterListResponse(data.command.data);
            case commands_1.EmdiResponses.ActiveContentList:
                return new commands_1.ActiveContentListResponse(data.command.data);
            case commands_1.EmdiResponses.SupportedEventList:
                return new supported_event_list_1.SupportedEventListResponse(data.command.data);
            case commands_1.EmdiResponses.LogContentEventAck:
                return new commands_1.LogContentEventAckResponse();
            case commands_1.EmdiResponses.MeterReport:
                return new commands_1.MeterReportResponse(data.command.data);
            case commands_1.EmdiResponses.ActiveContentList:
                return new commands_1.ActiveContentListResponse(data.command.data);
            case commands_1.EmdiResponses.EgmId:
                return new commands_1.EgmIdResponse(data.command.data);
            default:
                throw new Error('Response not found');
        }
    };
    EmdiFactory.toUpperCamelCase = function (s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
    return EmdiFactory;
}());
exports.EmdiFactory = EmdiFactory;
