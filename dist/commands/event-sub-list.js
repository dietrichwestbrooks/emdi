"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var EventSubListResponse = /** @class */ (function () {
    function EventSubListResponse(data) {
        this.name = 'EventSubList';
        this.responseType = emdi_command_1.EmdiResponses.EventSubList;
        this.class = emdi_command_1.EmdiClasses.EventHandler;
        this.eventSubscriptions = [];
        console.log('EventSubListResponse =', data);
        if (data['md:eventSubscription'] === undefined) {
            return;
        }
        for (var _i = 0, _a = data['md:eventSubscription']; _i < _a.length; _i++) {
            var subs = _a[_i];
            console.log('subscription =', subs);
            this.eventSubscriptions.push({
                code: subs['$']['md:eventCode'],
            });
        }
    }
    return EventSubListResponse;
}());
exports.EventSubListResponse = EventSubListResponse;
