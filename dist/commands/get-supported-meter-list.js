"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetSupportedMeterListCommand = /** @class */ (function () {
    function GetSupportedMeterListCommand() {
        this.name = 'GetSupportedMeterList';
        this.commandType = emdi_command_1.EmdiCommands.GetSupportedMeterList;
        this.class = emdi_command_1.EmdiClasses.Meters;
    }
    GetSupportedMeterListCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdMeters xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getSupportedMeterList />\n           </md:mdMeters>\n        </md:mdMsg>";
    };
    return GetSupportedMeterListCommand;
}());
exports.GetSupportedMeterListCommand = GetSupportedMeterListCommand;
