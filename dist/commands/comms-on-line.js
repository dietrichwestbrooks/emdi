"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var CommsOnLineCommand = /** @class */ (function () {
    function CommsOnLineCommand() {
        this.name = 'CommsOnLine';
        this.commandType = emdi_command_1.EmdiCommands.CommsOnLine;
        this.class = emdi_command_1.EmdiClasses.Comms;
        this.requiresInput = true;
    }
    CommsOnLineCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdComms xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n               <md:commsOnLine md:mdAccessToken=\"" + this.accessToken + "\" />\n           </md:mdComms>\n        </md:mdMsg>";
    };
    return CommsOnLineCommand;
}());
exports.CommsOnLineCommand = CommsOnLineCommand;
