"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var CabinetStatusResponse = /** @class */ (function () {
    function CabinetStatusResponse(data) {
        this.name = 'CabinetStatus';
        this.responseType = emdi_command_1.EmdiResponses.CabinetStatus;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
        console.log('CabinetStatusResponse =', data);
        this.egmState = data['$']['md:egmState'];
        this.deviceClass = data['$']['md:deviceClass'];
    }
    return CabinetStatusResponse;
}());
exports.CabinetStatusResponse = CabinetStatusResponse;
