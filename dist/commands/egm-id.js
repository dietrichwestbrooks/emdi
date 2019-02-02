"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var EgmIdResponse = /** @class */ (function () {
    function EgmIdResponse(data) {
        this.name = 'EgmId';
        this.responseType = emdi_command_1.EmdiResponses.EgmId;
        this.class = emdi_command_1.EmdiClasses.Host;
        console.log('EgmIdResponse: data =', data);
        this.egmId = data['$']['hst:egmId'];
    }
    return EgmIdResponse;
}());
exports.EgmIdResponse = EgmIdResponse;
