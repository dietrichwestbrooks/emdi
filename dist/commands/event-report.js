"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var event_ack_1 = require("./event-ack");
var EventReportEvent = /** @class */ (function () {
    function EventReportEvent(data) {
        this.name = 'EventReport';
        this.eventType = emdi_command_1.EmdiEvents.EventReport;
        this.class = emdi_command_1.EmdiClasses.EventHandler;
        this.ack = new event_ack_1.EventAckCommand();
        this.eventItems = [];
        console.log('EventReportEvent =', data);
        if (data['md:eventItem'] === undefined) {
            return;
        }
        for (var _i = 0, _a = data['md:eventItem']; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log('item =', item);
            var eventItem = {
                code: item['$']['md:eventCode'],
            };
            if (eventItem.code === 'G2S_CBE101') {
                if (item['md:cabinetStatus'][0]['$']['plc:localeId']) {
                    eventItem.item = { localeId: item['md:cabinetStatus'][0]['$']['plc:localeId'] };
                }
                else {
                    eventItem.item = { localeId: 'en_US' };
                }
            }
            this.eventItems.push(eventItem);
        }
    }
    return EventReportEvent;
}());
exports.EventReportEvent = EventReportEvent;
