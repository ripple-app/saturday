const uniqid = require('uniqid');
const Config = require('./config');

module.exports = function (options) {
    if (!options) {
        throw new Error('agent options is undefined');
    }

    if (!(options.host)) {
        throw new Error('agent options.host is invalid');
    }

    if (!(options.port)) {
        throw new Error('agent options.port is invalid');
    }

    const config = Config(options);

    /**
     * config response methods
     * @param {*} req - express request
     * @param {*} res - express response
     */
    async function configure(req, res) {
        const id = uniqid();

        // send call flow:  send -> json -> send
        // json call flow:  json -> send
        await config.configureJSON(id, req, res);
        await config.configureSend(id, req, res);
        await config.configureEnd(id, req, res);
    }

    return async function (req, res, next) {
        await configure(req, res);
        next();
    };
};
