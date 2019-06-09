const postman = require('./postman');
module.exports = function(options) {
    postman.connect(options);
    return {
        send: postman.send
    }
};