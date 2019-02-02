"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var CardStatusResponse = /** @class */ (function () {
    function CardStatusResponse(data) {
        this.name = 'CardStatus';
        this.responseType = emdi_command_1.EmdiResponses.CardStatus;
        this.class = emdi_command_1.EmdiClasses.Cabinet;
        this.cardIn = false;
        console.log('CardStatusResponse =', data);
        this.cardIn = data['$']['md:cardIn'] === 'true';
        this.idReaderType = data['$']['md:idReaderType'];
        this.idNumber = data['$']['md:idNumber'];
        this.idValidExpired = data['$']['md:idValidExpired'] !== 'false'; // Defaults to true
    }
    return CardStatusResponse;
}());
exports.CardStatusResponse = CardStatusResponse;
