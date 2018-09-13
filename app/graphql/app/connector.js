const { BaseContextClass } = require('byted-gulu');

class AppConnector extends BaseContextClass {
    async queryAll() {
        return this.ctx.service.test.query();
    }
}

module.exports = AppConnector;
