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
    get(path, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `GET ${path}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
            this._callbacks.set(key, callbacks);
        });
    }
    post(path, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `POST ${path}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
            this._callbacks.set(key, callbacks);
        });
    }
    patch(path, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `PATCH ${path}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
            this._callbacks.set(key, callbacks);
        });
    }
    put(path, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `PUT ${path}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
            this._callbacks.set(key, callbacks);
        });
    }
    delete(path, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `DELETE ${path}`;
            let callbacks = this._callbacks.get(key);
            if (!callbacks) {
                callbacks = [];
            }
            callbacks.push(callback);
            this._callbacks.set(key, callbacks);
        });
    }
    routes() {
        return (ctx, next) => __awaiter(this, void 0, void 0, function* () {
            const { path, method } = ctx.request;
            const key = `${method} ${path}`;
            const callbacks = this._callbacks.get(key);
            if (!callbacks) {
                ctx.response.status = 404;
                ctx.body = 'Not Found';
                return;
            }
            callbacks.forEach(cb => cb(ctx));
            yield next();
        });
    }
}
exports.Router = Router;
