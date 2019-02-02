"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetActiveContentCommand = /** @class */ (function () {
    function GetActiveContentCommand() {
        this.name = 'GetActiveContent';
        this.commandType = emdi_command_1.EmdiCommands.GetActiveContent;
        this.class = emdi_command_1.EmdiClasses.ContentToContent;
    }
    GetActiveContentCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <cci:mdContentToContent xmlns:cci=\"http://www.gamingstandards.com/emdi/schemas/v1b/CCI\"\n           md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <cci:getActiveContent />\n           </cci:mdContentToContent>\n        </md:mdMsg>";
    };
    return GetActiveContentCommand;
}());
exports.GetActiveContentCommand = GetActiveContentCommand;
