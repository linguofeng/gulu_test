module.exports = (app) => {
    return {
        middleware: [
            'koa-body',
        ],
        plugin: [
            'byted-gulu-runtime-ies',
            'byted-gulu-graphql',
        ],
        koaBody: {
        },

        graphql: {
            router: '/graphql', // GraphQL路由
            graphiql: true, // 是否开启GraphIQL
        },
    };
}
