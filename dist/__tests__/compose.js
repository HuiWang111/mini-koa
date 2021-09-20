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
const compose_1 = require("../compose");
describe('test compose', () => {
    it('compose should work', () => __awaiter(void 0, void 0, void 0, function* () {
        const middlewares = [];
        const numbers = [];
        middlewares.push((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
            numbers.push(1);
            yield next();
            numbers.push(6);
        }));
        middlewares.push((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
            numbers.push(2);
            yield next();
            numbers.push(5);
        }));
        middlewares.push((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
            numbers.push(3);
            yield next();
            numbers.push(4);
        }));
        yield (0, compose_1.compose)(middlewares)({});
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    }));
});
