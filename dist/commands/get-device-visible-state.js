"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetDeviceVisibleStateCommand = /** @class */ (function () {
    function GetDeviceVisibleStateCommand() {
        this.name = 'GetDeviceVisibleState';
        this.commandType = emdi_command_1.EmdiCommands.GetDeviceVisibleState;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
    }
    GetDeviceVisibleStateCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdCabinet xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getDeviceVisibleState />\n           </md:mdCabinet>\n        </md:mdMsg>";
    };
    return GetDeviceVisibleStateCommand;
}());
exports.GetDeviceVisibleStateCommand = GetDeviceVisibleStateCommand;
