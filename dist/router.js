"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
class Router {
    constructor() {
        this._methods = [
            'GET',
            'PUT',
            'PATCH',
            'POST',
            'DELETE'
        ];
        this._callbacks = new Map();
    }
    get(url, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `GET ${url}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
        });
    }
    post(url, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `POST ${url}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
        });
    }
    patch(url, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `PATCH ${url}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
        });
    }
    put(url, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `PUT ${url}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
        });
    }
    delete(url, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `DELETE ${url}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
        });
    }
    routes() {
        return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            const { url, method } = ctx.request;
            const key = `${method} ${url}`;
            const callbacks = this._callbacks.get(key);
            if (!callbacks) {
                return;
            }
            callbacks.forEach(cb => cb(ctx));
            yield next();
        });
    }
}
exports.Router = Router;
