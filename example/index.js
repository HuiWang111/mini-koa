const Koa = require('../dist').default;

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(1);
    await next();
    console.log(4);
});

app.use(async (ctx, next) => {
    console.log(2);
    await next();
    console.log(3);

    ctx.body = 'this is mini-koa';
});

app.listen(3001, () => {
    console.log('server listen on 3001');
});
