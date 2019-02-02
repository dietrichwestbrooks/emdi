"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var MeterSubListResponse = /** @class */ (function () {
    function MeterSubListResponse(data) {
        this.name = 'MeterSubList';
        this.responseType = emdi_command_1.EmdiResponses.MeterSubList;
        this.class = emdi_command_1.EmdiClasses.Meters;
        this.meterSubscriptions = [];
        console.log('MeterSubListResponse =', data);
        if (data['md:meterSubscription'] === undefined) {
            return;
        }
        for (var _i = 0, _a = data['md:meterSubscription']; _i < _a.length; _i++) {
            var subs = _a[_i];
            console.log('subscription =', subs);
            this.meterSubscriptions.push({
                name: subs['$']['md:meterName'],
                text: subs['$']['md:meterType'],
            });
        }
    }
    return MeterSubListResponse;
}());
exports.MeterSubListResponse = MeterSubListResponse;
