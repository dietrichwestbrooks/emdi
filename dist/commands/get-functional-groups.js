"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetFunctionalGroupsCommand = /** @class */ (function () {
    function GetFunctionalGroupsCommand() {
        this.name = 'GetFunctionalGroups';
        this.commandType = emdi_command_1.EmdiCommands.GetFunctionalGroups;
        this.class = emdi_command_1.EmdiClasses.Comms;
        this.includeCommands = false;
    }
    GetFunctionalGroupsCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdComms xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getFunctionalGroups md:includeCommands=\"" + this.includeCommands + "\" />\n           </md:mdComms>\n        </md:mdMsg>";
    };
    return GetFunctionalGroupsCommand;
}());
exports.GetFunctionalGroupsCommand = GetFunctionalGroupsCommand;
