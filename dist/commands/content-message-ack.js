"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var ContentMessageAckCommand = /** @class */ (function () {
    function ContentMessageAckCommand() {
        this.name = 'ContentMessageAck';
        this.commandType = emdi_command_1.EmdiCommands.ContentMessageAck;
        this.class = emdi_command_1.EmdiClasses.ContentToContent;
    }
    ContentMessageAckCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <cci:mdContentToContent xmlns:cci=\"http://www.gamingstandards.com/emdi/schemas/v1b/CCI\"\n           md:cmdType=\"response\" md:sessionId=\"" + sessionId + "\">\n               <cci:contentMessageAck />\n           </cci:mdContentToContent>\n        </md:mdMsg>";
    };
    return ContentMessageAckCommand;
}());
exports.ContentMessageAckCommand = ContentMessageAckCommand;
var ContentMessageAckResponse = /** @class */ (function () {
    function ContentMessageAckResponse(data) {
        this.name = 'ContentMessageAck';
        this.responseType = emdi_command_1.EmdiResponses.ContentMessageAck;
        this.class = emdi_command_1.EmdiClasses.ContentToContent;
        this.sessionId = 0;
        console.log('ContentMessageAckResponse: data =', data);
    }
    return ContentMessageAckResponse;
}());
exports.ContentMessageAckResponse = ContentMessageAckResponse;
