"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var SupportedMeterListResponse = /** @class */ (function () {
    function SupportedMeterListResponse(data) {
        this.name = 'SupportedMeterList';
        this.responseType = emdi_command_1.EmdiResponses.SupportedMeterList;
        this.class = emdi_command_1.EmdiClasses.Meters;
        this.supportedMeters = [];
        console.log('SupportedMeterListResponse =', data);
        for (var _i = 0, _a = data['md:supportedMeter']; _i < _a.length; _i++) {
            var meter = _a[_i];
            console.log('meter =', meter);
            this.supportedMeters.push({
                name: meter['$']['md:meterName'],
                type: meter['$']['md:meterType'],
            });
        }
    }
    return SupportedMeterListResponse;
}());
exports.SupportedMeterListResponse = SupportedMeterListResponse;
