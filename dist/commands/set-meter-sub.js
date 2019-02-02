"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var SetMeterSubCommand = /** @class */ (function () {
    function SetMeterSubCommand() {
        this.name = 'SetMeterSub';
        this.commandType = emdi_command_1.EmdiCommands.SetMeterSub;
        this.class = emdi_command_1.EmdiClasses.Meters;
        this.meterSubscriptions = [];
    }
    SetMeterSubCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n            <md:mdMeters xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:setMeterSub>\n                    " + this.getMeterSubs() + "\n                </md:setMeterSub>\n            </md:mdMeters>\n        </md:mdMsg>";
    };
    SetMeterSubCommand.prototype.getMeterSubs = function () {
        var xml = '';
        for (var _i = 0, _a = this.meterSubscriptions; _i < _a.length; _i++) {
            var subs = _a[_i];
            xml += "<md:meterSubscription md:meterName=\"" + subs.name + "\" md:meterType=\"" + subs.type + "\" />";
        }
        return xml;
    };
    return SetMeterSubCommand;
}());
exports.SetMeterSubCommand = SetMeterSubCommand;
