"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetEventSubListCommand = /** @class */ (function () {
    function GetEventSubListCommand() {
        this.name = 'GetEventSubList';
        this.commandType = emdi_command_1.EmdiCommands.GetEventSubList;
        this.class = emdi_command_1.EmdiClasses.EventHandler;
    }
    GetEventSubListCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:getEventSubList />\n           </md:mdEventHandler>\n        </md:mdMsg>";
    };
    return GetEventSubListCommand;
}());
exports.GetEventSubListCommand = GetEventSubListCommand;
