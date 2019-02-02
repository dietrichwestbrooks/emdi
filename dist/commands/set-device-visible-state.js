"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var SetDeviceVisibleStateCommand = /** @class */ (function () {
    function SetDeviceVisibleStateCommand() {
        this.name = 'SetDeviceVisibleState';
        this.commandType = emdi_command_1.EmdiCommands.SetDeviceVisibleState;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
        this.deviceVisibleState = false;
    }
    SetDeviceVisibleStateCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdCabinet xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:setDeviceVisibleState md:deviceVisibleState=\"" + this.deviceVisibleState + "\" />\n           </md:mdCabinet>\n        </md:mdMsg>";
    };
    return SetDeviceVisibleStateCommand;
}());
exports.SetDeviceVisibleStateCommand = SetDeviceVisibleStateCommand;
