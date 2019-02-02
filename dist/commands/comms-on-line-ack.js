"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var CommsOnLineAckResponse = /** @class */ (function () {
    function CommsOnLineAckResponse(data) {
        this.name = 'CommsOnLineAck';
        this.responseType = emdi_command_1.EmdiResponses.CommsOnLineAck;
        this.class = emdi_command_1.EmdiClasses.Comms;
        this.sessionValid = false;
        console.log('CommsOnLineAck: data =', data);
        this.sessionValid = data['$']['md:sessionValid'] === 'true';
    }
    return CommsOnLineAckResponse;
}());
exports.CommsOnLineAckResponse = CommsOnLineAckResponse;
