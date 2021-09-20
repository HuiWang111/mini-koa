"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
class Context {
    constructor(request, response, req, res) {
        this._request = request;
        this._response = response;
        this._req = req;
        this._res = res;
    }
    get request() {
        return this._request;
    }
    get response() {
        return this._response;
    }
    get req() {
        return this._req;
    }
    get res() {
        return this._res;
    }
    set body(body) {
        this._res.end(body);
    }
}
exports.Context = Context;
