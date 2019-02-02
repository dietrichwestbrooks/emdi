"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var SetCallAttendantStateCommand = /** @class */ (function () {
    function SetCallAttendantStateCommand() {
        this.name = 'SetCallAttendantState';
        this.commandType = emdi_command_1.EmdiCommands.SetCallAttendantState;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
        this.enable = false;
    }
    SetCallAttendantStateCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdCabinet xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:setCallAttendantState md:enable=\"" + this.enable + "\" />\n           </md:mdCabinet>\n        </md:mdMsg>";
    };
    return SetCallAttendantStateCommand;
}());
exports.SetCallAttendantStateCommand = SetCallAttendantStateCommand;
