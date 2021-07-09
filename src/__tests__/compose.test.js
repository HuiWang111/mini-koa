import { compose } from '../compose';

describe('test compose', () => {
    it('compose should work', async () => {
        const middlewares = [];
        const numbers = [];

        middlewares.push(async (ctx, next) => {
            numbers.push(1);
            await next();
            numbers.push(6);
        });

        middlewares.push(async (ctx, next) => {
            numbers.push(2);
            await next();
            numbers.push(5);
        });

        middlewares.push(async (ctx, next) => {
            numbers.push(3);
            await next();
            numbers.push(4);
        });

        await compose(middlewares)({});
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
