"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var CallAttendantStatusResponse = /** @class */ (function () {
    function CallAttendantStatusResponse(data) {
        this.name = 'CallAttendantStatus';
        this.responseType = emdi_command_1.EmdiResponses.CallAttendantStatus;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
        this.callAttendantActive = false;
        console.log('CallAttendantStatusResponse =', data);
        this.callAttendantActive = data['$']['md:callAttendantActive'] === 'true';
    }
    return CallAttendantStatusResponse;
}());
exports.CallAttendantStatusResponse = CallAttendantStatusResponse;
