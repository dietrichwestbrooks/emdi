"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetCabinetStatusCommand = /** @class */ (function () {
    function GetCabinetStatusCommand() {
        this.name = 'GetCabinetStatus';
        this.commandType = emdi_command_1.EmdiCommands.GetCabinetStatus;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
    }
    GetCabinetStatusCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\" xmlns:plc=\"http://www.gamingstandards.com/emdi/schemas/v1b/PLC\">\n           <md:mdCabinet md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <plc:getCabinetStatus />\n           </md:mdCabinet>\n        </md:mdMsg>";
    };
    return GetCabinetStatusCommand;
}());
exports.GetCabinetStatusCommand = GetCabinetStatusCommand;
