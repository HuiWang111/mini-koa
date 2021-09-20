"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Koa = void 0;
const http_1 = __importDefault(require("http"));
const request_1 = require("./request");
const response_1 = require("./response");
const context_1 = require("./context");
const compose_1 = require("./compose");
class Koa {
    constructor() {
        this._middlewares = new Set();
    }
    use(middleware) {
        if (typeof middleware === 'function') {
            this._middlewares.add(middleware);
        }
        return this;
    }
    listen(...args) {
        http_1.default.createServer((req, res) => {
            const request = new request_1.Request(req);
            const response = new response_1.Response(res);
            const ctx = new context_1.Context(request, response, req, res);
            const fn = (0, compose_1.compose)([...this._middlewares]);
            fn(ctx);
        })
            .listen(...args);
        return this;
    }
}
exports.Koa = Koa;
