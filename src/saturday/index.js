const saturday = require('./saturday');

module.exports = function () {
    return {
        start: saturday.start,
        end: saturday.end,
        remove: saturday.remove,
        get: saturday.get
    };
}
