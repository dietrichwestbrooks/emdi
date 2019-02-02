"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var ClearEventSubAckResponse = /** @class */ (function () {
    function ClearEventSubAckResponse() {
        this.name = 'ClearEventSubAck';
        this.responseType = emdi_command_1.EmdiResponses.ClearEventSubAck;
        this.class = emdi_command_1.EmdiClasses.EventHandler;
    }
    return ClearEventSubAckResponse;
}());
exports.ClearEventSubAckResponse = ClearEventSubAckResponse;
