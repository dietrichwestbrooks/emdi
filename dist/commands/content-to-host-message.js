"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var ContentToHostMessageCommand = /** @class */ (function () {
    function ContentToHostMessageCommand() {
        this.name = 'ContentToHostMessage';
        this.commandType = emdi_command_1.EmdiCommands.ContentToHostMessage;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
    }
    ContentToHostMessageCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\" xmlns:hci=\"http://www.gamingstandards.com/emdi/schemas/v1b/HCI\">\n            <md:mdCabinet md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <hci:contentToHostMessage>\n                    <hci:instructionData>" + btoa(this.instructionData) + "</hci:instructionData>\n                </hci:contentToHostMessage>\n            </md:mdCabinet>\n        </md:mdMsg>";
    };
    return ContentToHostMessageCommand;
}());
exports.ContentToHostMessageCommand = ContentToHostMessageCommand;
