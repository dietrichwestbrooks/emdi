"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var HostToContentMessageAckCommand = /** @class */ (function () {
    function HostToContentMessageAckCommand() {
        this.name = 'HostToContentMessageAck';
        this.commandType = emdi_command_1.EmdiCommands.HostToContentMessageAck;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
    }
    HostToContentMessageAckCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdCabinet md:cmdType=\"response\" md:sessionId=\"" + sessionId + "\">\n               <hci:hostToContentMessageAck xmlns:hci=\"http://www.gamingstandards.com/emdi/schemas/v1b/HCI\" />\n           </md:mdCabinet>\n        </md:mdMsg>";
    };
    return HostToContentMessageAckCommand;
}());
exports.HostToContentMessageAckCommand = HostToContentMessageAckCommand;
