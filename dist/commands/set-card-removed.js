"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var SetCardRemovedCommand = /** @class */ (function () {
    function SetCardRemovedCommand() {
        this.name = 'SetCardRemoved';
        this.commandType = emdi_command_1.EmdiCommands.SetCardRemoved;
        this.class = emdi_command_1.EmdiClasses.Comms;
        this.idReaderId = 1;
    }
    SetCardRemovedCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\" xmlns:cpc=\"http://www.gamingstandards.com/emdi/schemas/v1b/CPC\">\n            <md:mdCabinet md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <cpc:setCardRemoved cpc:idReaderId=\"" + this.idReaderId + "\" />\n            </md:mdCabinet>\n        </md:mdMsg>";
    };
    return SetCardRemovedCommand;
}());
exports.SetCardRemovedCommand = SetCardRemovedCommand;
