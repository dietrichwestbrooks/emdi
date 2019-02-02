"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var content_message_ack_1 = require("./content-message-ack");
var ContentMessageCommand = /** @class */ (function () {
    function ContentMessageCommand() {
        this.name = 'ContentMessage';
        this.commandType = emdi_command_1.EmdiCommands.ContentMessage;
        this.class = emdi_command_1.EmdiClasses.ContentToContent;
    }
    ContentMessageCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <cci:mdContentToContent xmlns:md=\"http://mediaDisplay.igt.com\" xmlns:cci=\"http://www.gamingstandards.com/emdi/schemas/v1b/CCI\"\n           md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <cci:contentMessage cci:mediaDisplayId=\"" + this.mediaDisplayId + "\" cci:contentId=\"" + this.contentId + "\">\n                    <cci:contentData>" + btoa(this.contentData) + "</cci:contentData>\n                </cci:contentMessage>\n           </cci:mdContentToContent>\n        </md:mdMsg>";
    };
    return ContentMessageCommand;
}());
exports.ContentMessageCommand = ContentMessageCommand;
var ContentMessageEvent = /** @class */ (function () {
    function ContentMessageEvent(data) {
        this.name = 'ContentMessage';
        this.eventType = emdi_command_1.EmdiEvents.ContentMessage;
        this.class = emdi_command_1.EmdiClasses.ContentToContent;
        this.sessionId = 0;
        this.ack = new content_message_ack_1.ContentMessageAckCommand();
        this.contentData = [];
        console.log('ContentMessageEvent =', data);
        this.mediaDisplayId = +data['cci:mediaDisplayId'];
        this.contentId = +data['cci:contentId'];
        for (var _i = 0, _a = data['cci:contentData']; _i < _a.length; _i++) {
            var contentData = _a[_i];
            console.log('contentData =', atob(contentData));
            this.contentData.push(atob(contentData));
        }
    }
    return ContentMessageEvent;
}());
exports.ContentMessageEvent = ContentMessageEvent;
