"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var meter_report_ack_1 = require("./meter-report-ack");
var MeterReportEvent = /** @class */ (function () {
    function MeterReportEvent(data) {
        this.name = 'MeterReport';
        this.eventType = emdi_command_1.EmdiEvents.MeterReport;
        this.class = emdi_command_1.EmdiClasses.Meters;
        this.ack = new meter_report_ack_1.MeterReportAckCommand();
    }
    return MeterReportEvent;
}());
exports.MeterReportEvent = MeterReportEvent;
var MeterReportResponse = /** @class */ (function () {
    function MeterReportResponse(data) {
        this.name = 'MeterReport';
        this.responseType = emdi_command_1.EmdiResponses.MeterReport;
        this.class = emdi_command_1.EmdiClasses.Meters;
        console.log('MeterReportResponse =', data);
    }
    return MeterReportResponse;
}());
exports.MeterReportResponse = MeterReportResponse;
