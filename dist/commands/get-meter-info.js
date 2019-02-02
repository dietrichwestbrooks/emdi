"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var GetMeterInfoCommand = /** @class */ (function () {
    function GetMeterInfoCommand() {
        this.name = 'GetMeterInfo';
        this.commandType = emdi_command_1.EmdiCommands.GetMeterInfo;
        this.class = emdi_command_1.EmdiClasses.Comms;
        this.meterSubscriptions = [];
    }
    GetMeterInfoCommand.prototype.getXml = function (sessionId) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n        <md:mdMsg xmlns:md=\"http://mediaDisplay.igt.com\">\n            <md:mdMeters xmlns:md=\"http://mediaDisplay.igt.com\" md:cmdType=\"request\" md:sessionId=\"" + sessionId + "\">\n                <md:getMeterInfo>\n                    " + this.getMeterSubs() + "\n                </md:getMeterInfo>\n            </md:mdMeters>\n        </md:mdMsg>";
    };
    GetMeterInfoCommand.prototype.getMeterSubs = function () {
        var xml = '';
        for (var _i = 0, _a = this.meterSubscriptions; _i < _a.length; _i++) {
            var subs = _a[_i];
            xml += "<md:meterSubscription md:meterName=\"" + subs.name + "\" md:meterType=\"" + subs.type + "\" />";
        }
        return xml;
    };
    return GetMeterInfoCommand;
}());
exports.GetMeterInfoCommand = GetMeterInfoCommand;
