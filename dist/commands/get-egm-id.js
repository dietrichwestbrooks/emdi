"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetEgmIdCommand = /** @class */ (function () {
    function GetEgmIdCommand() {
        this.name = 'GetEgmId';
        this.commandType = emdi_command_1.EmdiCommands.GetEgmId;
        this.class = emdi_command_1.EmdiClasses.Host;
    }
    GetEgmIdCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <hst:mdHost xmlns:hst=\"http://www.aristocrat.com/emdi/schemas/v1b/HST\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <hst:getEgmId />\n           </hst:mdHost>\n        </md:mdMsg>";
    };
    return GetEgmIdCommand;
}());
exports.GetEgmIdCommand = GetEgmIdCommand;
