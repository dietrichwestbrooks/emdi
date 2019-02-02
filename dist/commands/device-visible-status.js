"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var DeviceVisibleStatusResponse = /** @class */ (function () {
    function DeviceVisibleStatusResponse(data) {
        this.name = 'DeviceVisibleStatus';
        this.responseType = emdi_command_1.EmdiResponses.DeviceVisibleStatus;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
        this.deviceVisibleState = false;
        console.log('DeviceVisibleStatusResponse =', data);
        if (data['$']) {
            this.deviceVisibleState = data['$']['md:deviceVisibleState'] !== 'false'; // Defaults to true
        }
        else {
            this.deviceVisibleState = true;
        }
    }
    return DeviceVisibleStatusResponse;
}());
exports.DeviceVisibleStatusResponse = DeviceVisibleStatusResponse;
