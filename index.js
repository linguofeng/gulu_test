const path = require('path');
const Gulu = require('byted-gulu');
const { nextApp } = require('./app/next');

nextApp.prepare().then(() => {
    // 创建应用
    const app = new Gulu({
        root: path.resolve(__dirname),
    });

    // 加载应用目录并启动
    app.load(path.resolve(__dirname)).listen(3000);
});
