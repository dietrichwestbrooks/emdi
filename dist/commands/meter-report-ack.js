"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var MeterReportAckCommand = /** @class */ (function () {
    function MeterReportAckCommand() {
        this.name = 'MeterReportAck';
        this.commandType = emdi_command_1.EmdiCommands.MeterReportAck;
        this.class = emdi_command_1.EmdiClasses.Meters;
    }
    MeterReportAckCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdMeters md:cmdType=\"response\" md:sessionId=\"" + sessionId + "\">\n               <md:meterReportAck />\n           </md:mdMeters>\n        </md:mdMsg>";
    };
    return MeterReportAckCommand;
}());
exports.MeterReportAckCommand = MeterReportAckCommand;
