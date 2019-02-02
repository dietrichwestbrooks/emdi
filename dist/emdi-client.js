"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var emd_service_1 = require("./emd-service");
var emdi_command_1 = require("./commands/emdi-command");
var emdi_factory_1 = require("./emdi-factory");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var utf8 = require("utf8");
var set_device_visible_state_1 = require("./commands/set-device-visible-state");
var content_message_1 = require("./commands/content-message");
var commands_1 = require("./commands");
var EmdiClient = /** @class */ (function () {
    function EmdiClient() {
        this.sessionId = 1;
        this.pulseInterval = 0;
        this.heartbeat = emdi_factory_1.EmdiFactory.createCommand('Heartbeat');
        this.isSessionValid = false;
        this.accessToken = 0;
        this.connected = new rxjs_1.BehaviorSubject(false);
        this.disconnected = new rxjs_1.BehaviorSubject(false);
        this.validated = new rxjs_1.BehaviorSubject(false);
        this.event = new rxjs_1.BehaviorSubject(null);
        this.response = new rxjs_1.BehaviorSubject(null);
        this.request = new rxjs_1.BehaviorSubject(null);
        this.error = new rxjs_1.BehaviorSubject(null);
        this.isConnected = false;
        this.deviceId = 0;
        // 'ATI_78D66F037219'; // EGM
        // 'ATI_00155D144F02'; // Local
        this.egmId = '';
        this.emdi = new emd_service_1.EmdiService();
        this.onConnected$ = this.connected.asObservable();
        this.onDisconnected$ = this.disconnected.asObservable();
        this.onValidated$ = this.validated.asObservable();
        this.onEvent$ = this.event.asObservable().pipe(operators_1.filter(function (e) { return e != null; }), operators_1.map(function (e) { return e; }));
        this.onResponse$ = this.response.asObservable().pipe(operators_1.filter(function (r) { return r != null; }), operators_1.map(function (r) { return r; }));
        this.onRequest$ = this.request.asObservable().pipe(operators_1.filter(function (c) { return c != null; }), operators_1.map(function (c) { return c; }));
        this.onError$ = this.error.asObservable().pipe(operators_1.filter(function (e) { return e != null; }), operators_1.map(function (e) { return e; }));
    }
    EmdiClient.prototype.connect = function (deviceId, accessToken) {
        var _this = this;
        return new Promise(function (resolve) {
            try {
                if (_this.isConnected) {
                    resolve(true);
                    return;
                }
                _this.messages = _this.emdi.connect(deviceId).pipe(operators_1.map(function (message) {
                    var data = utf8.decode(message.data);
                    return data;
                }));
                _this.subscription = _this.messages.subscribe(function (data) {
                    _this.onReceive(data);
                }, function (err) {
                    _this.onError(new emdi_command_1.EmdiError(err.message, 'Client'));
                }, function () {
                    console.log("connection closed");
                    clearInterval(_this.pulseInterval);
                    _this.isConnected = false;
                    _this.isSessionValid = false;
                    _this.onDisconnected();
                });
                _this.sessionId = 1;
                _this.deviceId = deviceId;
                _this.accessToken = accessToken;
                _this.isConnected = true;
                _this.onConnected();
                _this.validate();
                resolve(true);
            }
            catch (err) {
                console.error("error connecting to device " + deviceId + ": " + err);
                resolve(false);
            }
        });
    };
    EmdiClient.prototype.validate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.isSessionValid) {
                    resolve(true);
                    return;
                }
                var command = emdi_factory_1.EmdiFactory.createCommand('CommsOnLine');
                command.accessToken = parseInt(_this.accessToken.toString(), 10);
                _this.sendCommand(command)
                    .then(function (response) {
                    _this.isSessionValid = response.sessionValid;
                    if (_this.isSessionValid) {
                        _this.getEgmId().then(function (egmId) { return (_this.egmId = egmId); });
                        _this.onValidated();
                    }
                    resolve(_this.isSessionValid);
                })
                    .catch(function (error) {
                    throw error;
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    EmdiClient.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
                return [2 /*return*/];
            });
        });
    };
    EmdiClient.prototype.show = function () {
        return this.setDeviceVisbleState(true);
    };
    EmdiClient.prototype.hide = function () {
        return this.setDeviceVisbleState(false);
    };
    EmdiClient.prototype.getEgmId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var command = new commands_1.GetEgmIdCommand();
                _this.sendCommand(command)
                    .then(function (response) { return resolve(response.egmId); })
                    .catch(function (error) {
                    throw error;
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    EmdiClient.prototype.sendContent = function (mediaDisplayId, contentId, contentData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var command = new content_message_1.ContentMessageCommand();
                command.mediaDisplayId = mediaDisplayId;
                command.contentId = contentId;
                command.contentData = contentData;
                _this.sendCommand(command)
                    .then(function (response) {
                    resolve();
                })
                    .catch(function (error) {
                    throw error;
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    EmdiClient.prototype.subscribe = function () {
        var _this = this;
        var codes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            codes[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            try {
                var command_1 = new commands_1.SetEventSubCommand();
                codes.forEach(function (code) { return command_1.eventSubscriptions.push({ code: code }); });
                _this.sendCommand(command_1)
                    .then(function (response) {
                    var subs = response.eventSubscriptions;
                    resolve(subs.map(function (sub) { return sub.code; }));
                })
                    .catch(function (error) {
                    throw error;
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    EmdiClient.prototype.reconnect = function () {
        this.connect(this.deviceId, this.accessToken);
    };
    EmdiClient.prototype.onEvent = function (event) {
        this.event.next(event);
    };
    EmdiClient.prototype.onResponse = function (response) {
        this.response.next(response);
    };
    EmdiClient.prototype.onRequest = function (command) {
        this.request.next(command);
    };
    EmdiClient.prototype.onError = function (error) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        clearInterval(this.pulseInterval);
        this.error.next(error);
        this.isConnected = false;
        this.reconnect();
    };
    EmdiClient.prototype.onConnected = function () {
        this.connected.next(true);
    };
    EmdiClient.prototype.onDisconnected = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        clearInterval(this.pulseInterval);
        this.disconnected.next(true);
        this.isConnected = false;
        this.reconnect();
    };
    EmdiClient.prototype.onValidated = function () {
        this.validated.next(true);
    };
    EmdiClient.prototype.sendCommand = function (command) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (!_this.isConnected) {
                    throw new Error('No connection');
                }
                if (_this.pulseInterval) {
                    clearInterval(_this.pulseInterval);
                }
                _this.pulseInterval = setInterval(function () { return _this.pulse(); }, 25000);
                _this.onRequest(command);
                var sessionId_1 = _this.sessionId;
                var xml = command.getXml(sessionId_1);
                // console.log('default', this.hexEscape(xml));
                xml = utf8.encode(xml);
                // console.log('encoded', this.hexEscape(xml));
                _this.messages.next(xml);
                _this.sessionId++;
                var subscription_1 = _this.onResponse$
                    .pipe(operators_1.filter(function (response) { return response.sessionId === sessionId_1; }), operators_1.timeout(30000), operators_1.catchError(function () { return rxjs_1.of(new Error("Response timeout: " + command.name)); }))
                    .subscribe(function (result) {
                    if (result instanceof Error) {
                        reject(result);
                    }
                    else {
                        resolve(result);
                    }
                    subscription_1.unsubscribe();
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    EmdiClient.prototype.setDeviceVisbleState = function (state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var command = new set_device_visible_state_1.SetDeviceVisibleStateCommand();
                command.deviceVisibleState = state;
                _this.sendCommand(command)
                    .then(function (response) {
                    resolve(response.deviceVisibleState === state);
                })
                    .catch(function (error) {
                    throw error;
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    EmdiClient.prototype.sendResponse = function (event) {
        if (!this.isConnected) {
            throw new Error('No connection');
        }
        var xml = event.ack.getXml(event.sessionId);
        xml = utf8.encode(xml);
        this.messages.next(xml);
    };
    EmdiClient.prototype.pulse = function () {
        this.sendCommand(this.heartbeat);
    };
    EmdiClient.prototype.onReceive = function (xml) {
        var _this = this;
        console.log('receive: xml =', this.formatXml(xml));
        emdi_factory_1.EmdiFactory.createResponseOrEvent(xml).then(function (result) {
            console.log('createResponseOrEvent', result);
            if (_this.isErrorType(result)) {
                _this.onError(result);
            }
            else if (_this.isResponseType(result)) {
                var response = result;
                _this.onResponse(response);
            }
            else if (_this.isEventType(result)) {
                var event_1 = result;
                _this.sendResponse(event_1);
                _this.onEvent(event_1);
            }
        });
    };
    EmdiClient.prototype.isCommsOnLineAckType = function (value) {
        return value.sessionValid !== undefined;
    };
    EmdiClient.prototype.isErrorType = function (value) {
        return value.error !== undefined;
    };
    EmdiClient.prototype.isResponseType = function (value) {
        return value.responseType !== undefined;
    };
    EmdiClient.prototype.isEventType = function (value) {
        return value.eventType !== undefined;
    };
    EmdiClient.prototype.formatXml = function (xml) {
        var formatted = '';
        var reg = /(>)(<)(\/*)/g;
        var pad = 0;
        xml = xml.replace(reg, '$1\r\n$2$3');
        $.each(xml.split('\r\n'), function (index, node) {
            var indent = 0;
            if (node.match(/.+<\/\w[^>]*>$/)) {
                indent = 0;
            }
            else if (node.match(/^<\/\w/)) {
                if (pad !== 0) {
                    pad -= 1;
                }
            }
            else if (node.match(/^<\w([^>]*[^\/])?>.*$/)) {
                indent = 1;
            }
            else {
                indent = 0;
            }
            var padding = '';
            for (var i = 0; i < pad; i++) {
                padding += '  ';
            }
            formatted += padding + node + '\r\n';
            pad += indent;
        });
        return formatted;
    };
    return EmdiClient;
}());
exports.EmdiClient = EmdiClient;
