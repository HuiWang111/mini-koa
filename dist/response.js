"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(res) {
        this._res = res;
    }
    get headers() {
        return this._res.getHeaders();
    }
    get status() {
        return this._res.statusCode;
    }
    set status(code) {
        this._res.statusCode = code;
    }
    get message() {
        return this._res.statusMessage;
    }
    set message(msg) {
        this._res.statusMessage = msg;
    }
}
exports.Response = Response;
