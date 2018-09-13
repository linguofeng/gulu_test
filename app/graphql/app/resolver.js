module.exports = {
    Query: {
      apps: (root, args, ctx) => {
          return ctx.connector.app.queryAll();
      },
    },
  };
  