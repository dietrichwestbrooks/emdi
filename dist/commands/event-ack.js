"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var EventAckCommand = /** @class */ (function () {
    function EventAckCommand() {
        this.name = 'ContentMessageAck';
        this.commandType = emdi_command_1.EmdiCommands.EventAck;
        this.class = emdi_command_1.EmdiClasses.EventHandler;
    }
    EventAckCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler md:cmdType=\"response\" md:sessionId=\"" + sessionId + "\">\n               <md:eventAck />\n           </md:mdEventHandler>\n        </md:mdMsg>";
    };
    return EventAckCommand;
}());
exports.EventAckCommand = EventAckCommand;
