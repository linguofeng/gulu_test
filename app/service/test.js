const { Service } = require('byted-gulu');

class TestService extends Service {
    async query() {
        console.log('service test');

        return [
            {
                name: 'lxc',
                thumb: 'thumb',
                description: 'description',
            },
            {
                name: 'lxc1',
                thumb: 'thumb',
                description: 'description',
            },
        ];
    }
}

module.exports = TestService;
