"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var HeartbeatCommand = /** @class */ (function () {
    function HeartbeatCommand() {
        this.name = 'Heartbeat';
        this.commandType = emdi_command_1.EmdiCommands.Heartbeat;
        this.class = emdi_command_1.EmdiClasses.Comms;
    }
    HeartbeatCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdComms xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:heartbeat />\n           </md:mdComms>\n        </md:mdMsg>";
    };
    return HeartbeatCommand;
}());
exports.HeartbeatCommand = HeartbeatCommand;
