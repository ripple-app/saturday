const Saturday = require('./saturday');
const Postman = require('./postman');

let _saturday;
let _postman;

function setSaturday() {
    _saturday = Saturday();
}

function setPostman(options) {
    _postman = Postman(options);
}

/**
 * decorate express response json
 * @param {*} id - collector id
 * @param {*} req - express request
 * @param {*} res - express response
 */
function configureJSON(id, req, res) {
    return new Promise((resolve, reject) => {
        const _json = res.json.bind(res);

        _saturday.start(id, req, res);
        res.json = (body) => { // response intercept
            _saturday.end(id, req, res);
            _postman.send(_saturday.get(id));
            _saturday.remove(id);
            return _json(body);
        };
        resolve();
    });
}

/**
 * decorate express response send
 * @param {*} id - collector id
 * @param {*} req - express request
 * @param {*} res - express response
 */
function configureSend(id, req, res) {
    return new Promise((resolve, reject) => {
        const _send = res.send.bind(res);

        _saturday.start(id, req, res);
        res.send = (body) => { // response intercept
            _saturday.end(id, req, res);
            _postman.send(_saturday.get(id));
            _saturday.remove(id);
            return _send(body);
        };
        resolve();
    });
}

/**
 * decorate express response end
 * @param {*} id - collector id
 * @param {*} req - express request
 * @param {*} res - express response
 */
function configureEnd(id, req, res) {
    return new Promise((resolve, reject) => {
        const _end = res.end.bind(res);

        _saturday.start(id, req, res);
        res.end = (body) => { // response intercept
            _saturday.end(id, req, res);
            _postman.send(_saturday.get(id));
            _saturday.remove(id);
            return _end(body);
        };
        resolve();
    });
}

module.exports = function (options) {
    setSaturday();
    setPostman(options);

    return {
        configureJSON,
        configureSend,
        configureEnd
    };
};
