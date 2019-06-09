const config = require('./config');

module.exports = function(options) {
    config.setSaturday();
    config.setPostman(options);

    return {
        configureJSON: config.configureJSON,
        configureSend: config.configureSend,
        configureEnd: config.configureEnd,
    };
}
