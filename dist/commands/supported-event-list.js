"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var SupportedEventListResponse = /** @class */ (function () {
    function SupportedEventListResponse(data) {
        this.name = 'SupportedEventList';
        this.responseType = emdi_command_1.EmdiResponses.SupportedEventList;
        this.class = emdi_command_1.EmdiClasses.EventHandler;
        this.supportedEvents = [];
        console.log('SupportedEventListResponse =', data);
        for (var _i = 0, _a = data['md:supportedEvent']; _i < _a.length; _i++) {
            var event_1 = _a[_i];
            console.log('event =', event_1);
            this.supportedEvents.push({
                code: event_1['$']['md:eventCode'],
                text: event_1['$']['md:eventText'],
            });
        }
    }
    return SupportedEventListResponse;
}());
exports.SupportedEventListResponse = SupportedEventListResponse;
