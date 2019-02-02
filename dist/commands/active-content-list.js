"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var ActiveContentListResponse = /** @class */ (function () {
    function ActiveContentListResponse(data) {
        this.name = 'ActiveContentList';
        this.responseType = emdi_command_1.EmdiResponses.ActiveContentList;
        this.class = emdi_command_1.EmdiClasses.ContentToContent;
        this.contentList = [];
        console.log('ActiveContentListResponse =', data);
        if (data['cci:activeContent'] === undefined) {
            return;
        }
        for (var _i = 0, _a = data['cci:activeContent']; _i < _a.length; _i++) {
            var content = _a[_i];
            console.log('content =', content);
            this.contentList.push({
                contentId: content['$']['cci:contentId'],
                displayId: content['$']['cci:mediaDisplayId'],
            });
        }
    }
    return ActiveContentListResponse;
}());
exports.ActiveContentListResponse = ActiveContentListResponse;
