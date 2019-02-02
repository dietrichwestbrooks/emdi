"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var SetEventSubCommand = /** @class */ (function () {
    function SetEventSubCommand() {
        this.name = 'SetEventSub';
        this.commandType = emdi_command_1.EmdiCommands.SetEventSub;
        this.class = emdi_command_1.EmdiClasses.Comms;
        this.eventSubscriptions = [];
    }
    SetEventSubCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n           <md:mdEventHandler xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:setEventSub>\n                    " + this.getEventSubs() + "\n                </md:setEventSub>\n           </md:mdEventHandler>\n        </md:mdMsg>";
    };
    SetEventSubCommand.prototype.getEventSubs = function () {
        var xml = '';
        for (var _i = 0, _a = this.eventSubscriptions; _i < _a.length; _i++) {
            var subs = _a[_i];
            xml += "<md:eventSubscription md:eventCode=\"" + subs.code + "\" />";
        }
        return xml;
    };
    return SetEventSubCommand;
}());
exports.SetEventSubCommand = SetEventSubCommand;
