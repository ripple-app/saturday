let socket;

/**
 * connect to server
 * @param {*} options 
 */
function connect(options) {
    const io = require('socket.io-client');
    const url = `ws://${options.host}:${options.port}`;
    const opts = {};

    socket = io.connect(url, opts);
    socket.once('connect', (err) => {
        if (err) {
            throw new Error(err);
        }

        console.log('connect');
    });
}

/**
 * send message to server
 * @param {*} message 
 */
function send(message) {
    socket.emit('data', `${JSON.stringify(message)}!`);
}

module.exports = function(options) {
    connect(options);
    return {
        send
    }
};

