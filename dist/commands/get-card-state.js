"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetCardStateCommand = /** @class */ (function () {
    function GetCardStateCommand() {
        this.name = 'GetCardState';
        this.commandType = emdi_command_1.EmdiCommands.GetCardState;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
    }
    GetCardStateCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n            <md:mdCabinet xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:getCardState />\n            </md:mdCabinet>\n        </md:mdMsg>";
    };
    return GetCardStateCommand;
}());
exports.GetCardStateCommand = GetCardStateCommand;
