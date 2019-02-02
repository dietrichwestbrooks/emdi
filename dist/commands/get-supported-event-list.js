"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetSupportedEventListCommand = /** @class */ (function () {
    function GetSupportedEventListCommand() {
        this.name = 'GetSupportedEventList';
        this.commandType = emdi_command_1.EmdiCommands.GetSupportedEventList;
        this.class = emdi_command_1.EmdiClasses.EventHandler;
    }
    GetSupportedEventListCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getSupportedEventList />\n           </md:mdEventHandler>\n        </md:mdMsg>";
    };
    return GetSupportedEventListCommand;
}());
exports.GetSupportedEventListCommand = GetSupportedEventListCommand;
