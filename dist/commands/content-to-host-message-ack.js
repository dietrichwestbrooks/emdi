"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var ContentToHostMessageAckResponse = /** @class */ (function () {
    function ContentToHostMessageAckResponse() {
        this.name = 'ContentToHostMessageAck';
        this.responseType = emdi_command_1.EmdiResponses.ContentToHostMessageAck;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
    }
    return ContentToHostMessageAckResponse;
}());
exports.ContentToHostMessageAckResponse = ContentToHostMessageAckResponse;
