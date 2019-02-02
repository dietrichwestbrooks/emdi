"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var LogContentEventCommand = /** @class */ (function () {
    function LogContentEventCommand() {
        this.name = 'LogContentEvent';
        this.commandType = emdi_command_1.EmdiCommands.LogContentEvent;
        this.class = emdi_command_1.EmdiClasses.EventHandler;
    }
    LogContentEventCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:logContentEvent md:contentName=\"" + this.contentName + "\" md:eventName=\"" + this.eventName + "\" md:eventDescription=\"" + this.eventDescription + "\" />\n           </md:mdEventHandler>\n        </md:mdMsg>";
    };
    return LogContentEventCommand;
}());
exports.LogContentEventCommand = LogContentEventCommand;
