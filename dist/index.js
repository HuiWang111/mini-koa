"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = exports.default = void 0;
var app_1 = require("./app");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return app_1.Koa; } });
var router_1 = require("./router");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return router_1.Router; } });
