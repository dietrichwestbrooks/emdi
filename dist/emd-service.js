"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var retry_websocket_1 = require("./retry-websocket");
var BASE_PORT = 1023;
var EmdiService = /** @class */ (function () {
    function EmdiService() {
    }
    EmdiService.prototype.connect = function (id) {
        var port = BASE_PORT + id;
        var url = "ws://127.0.0.1:" + port;
        console.log("connecting to " + url + "...");
        return this.createSocketSubject(url);
    };
    EmdiService.prototype.createSocketSubject = function (url) {
        var replay = new rxjs_1.ReplaySubject();
        var observable = rxjs_1.Observable.create(function (obs) {
            var socket = new retry_websocket_1.RetryWebSocket(url);
            socket.message.subscribe(function (e) { return obs.next(e); });
            socket.error.subscribe(function (e) { return obs.error(e); });
            socket.close.subscribe(function (e) {
                if (e.wasClean) {
                    obs.complete();
                }
                else {
                    obs.error(e);
                }
            });
            var subscription;
            socket.open().then(function () {
                subscription = replay.subscribe(function (data) {
                    console.log('send', data);
                    if (socket.readyState === WebSocket.OPEN) {
                        socket.send(JSON.stringify(data));
                    }
                });
            });
            return function () {
                if (socket && socket.readyState === 1) {
                    socket.dispose();
                }
                if (subscription) {
                    subscription.unsubscribe();
                }
            };
        });
        return rxjs_1.Subject.create(replay, observable);
    };
    return EmdiService;
}());
exports.EmdiService = EmdiService;
exports.service = new EmdiService();
