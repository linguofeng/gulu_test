const { Controller } = require('byted-gulu');

class AppController extends Controller {
    async query(ctx) {        
        const apps = await ctx.service.test.query();
        ctx.body = {
            apps,
        };
    }
}
module.exports = AppController;
