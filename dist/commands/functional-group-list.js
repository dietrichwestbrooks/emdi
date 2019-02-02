"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emdi_command_1 = require("./emdi-command");
var FunctionalGroupListResponse = /** @class */ (function () {
    function FunctionalGroupListResponse(data) {
        this.name = 'FunctionalGroupList';
        this.responseType = emdi_command_1.EmdiResponses.FunctionalGroupList;
        this.class = emdi_command_1.EmdiClasses.Comms;
        this.groups = [];
        console.log('FunctionalGroupList =', data);
        for (var _i = 0, _a = data['md:functionalGroup']; _i < _a.length; _i++) {
            var group = _a[_i];
            console.log('group =', group);
            var groupItem = {
                name: group['$']['md:groupName'],
            };
            this.groups.push(groupItem);
            if (group['md:commandItem'] === undefined) {
                continue;
            }
            for (var _b = 0, _c = group['md:commandItem']; _b < _c.length; _b++) {
                var command = _c[_b];
                console.log('command =', command);
                groupItem.commands.push({
                    name: command['$']['md:commandName'],
                });
            }
        }
    }
    return FunctionalGroupListResponse;
}());
exports.FunctionalGroupListResponse = FunctionalGroupListResponse;
