const { nextApp, handle } = require('./next');

module.exports = app => {
    const { router, controller } = app;

    router.get('/test', controller.test.query);
    // router.get('/', controller.index.index);

    router.get('/a', async ctx => {
        await nextApp.render(ctx.req, ctx.res, '/a', ctx.query);
        ctx.respond = false;
    });

    router.get('/b', async ctx => {
        await nextApp.render(ctx.req, ctx.res, '/b', ctx.query);
        ctx.respond = false;
    });

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });
};
