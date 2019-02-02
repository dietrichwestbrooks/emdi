"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var host_to_content_message_ack_1 = require("./host-to-content-message-ack");
var HostToContentMessageEvent = /** @class */ (function () {
    function HostToContentMessageEvent(data) {
        this.name = 'HostToContentMessage';
        this.eventType = emdi_command_1.EmdiEvents.HostToContentMessage;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
        this.ack = new host_to_content_message_ack_1.HostToContentMessageAckCommand();
        this.instructionData = [];
        console.log("HostToContentMessageEvent = " + JSON.stringify(data));
        for (var _i = 0, _a = data['hci:instructionData']; _i < _a.length; _i++) {
            var instructionData = _a[_i];
            var d = atob(instructionData);
            console.log("instructionData = " + d);
            this.instructionData.push(d);
        }
    }
    return HostToContentMessageEvent;
}());
exports.HostToContentMessageEvent = HostToContentMessageEvent;
