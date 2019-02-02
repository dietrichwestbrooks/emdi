"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var HeartbeatAckResponse = /** @class */ (function () {
    function HeartbeatAckResponse() {
        this.name = 'HeartbeatAck';
        this.responseType = emdi_command_1.EmdiResponses.HeartbeatAck;
        this.class = emdi_command_1.EmdiClasses.Comms;
    }
    return HeartbeatAckResponse;
}());
exports.HeartbeatAckResponse = HeartbeatAckResponse;
