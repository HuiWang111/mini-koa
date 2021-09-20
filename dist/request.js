"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const parseurl_1 = __importDefault(require("parseurl"));
const url_1 = require("url");
class Request {
    constructor(req) {
        this._req = req;
    }
    get req() {
        return this._req;
    }
    get headers() {
        return this._req.headers;
    }
    set headers(val) {
        this._req.headers = val;
    }
    get url() {
        return this._req.url;
    }
    set url(val) {
        this._req.url = val;
    }
    get method() {
        return this._req.method;
    }
    set method(val) {
        this._req.method = val;
    }
    get path() {
        const url = (0, parseurl_1.default)(this._req);
        return typeof (url === null || url === void 0 ? void 0 : url.pathname) === 'undefined'
            ? null
            : url.pathname;
    }
    set path(path) {
        const url = (0, parseurl_1.default)(this._req);
        if (!url || url.pathname === path)
            return;
        url.pathname = path;
        this.url = (0, url_1.format)(url);
    }
    get querystring() {
        var _a;
        if (!this._req)
            return '';
        return ((_a = (0, parseurl_1.default)(this._req)) === null || _a === void 0 ? void 0 : _a.query) || '';
    }
    set querystring(str) {
        const url = (0, parseurl_1.default)(this._req);
        if (!url || url.search === `?${str}`)
            return;
        url.search = str;
        url.path = null;
        this.url = (0, url_1.format)(url);
    }
    get search() {
        if (!this.querystring)
            return '';
        return `?${this.querystring}`;
    }
    set search(str) {
        this.querystring = str;
    }
}
exports.Request = Request;
