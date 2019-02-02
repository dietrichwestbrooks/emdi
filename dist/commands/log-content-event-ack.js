"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var LogContentEventAckResponse = /** @class */ (function () {
    function LogContentEventAckResponse() {
        this.name = 'LogContentEventAck';
        this.responseType = emdi_command_1.EmdiResponses.LogContentEventAck;
        this.class = emdi_command_1.EmdiClasses.EventHandler;
    }
    return LogContentEventAckResponse;
}());
exports.LogContentEventAckResponse = LogContentEventAckResponse;
