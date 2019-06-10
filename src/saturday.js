const collector = {};

/**
 * set start point
 * @param {*} id - collctor id
 * @param {*} req - express request
 * @param {*} res  - express response
 */
function start(id, req, res) {
    if (!collector[id]) {
        collector[id] = {
            ip: req.ip,
            method: req.method,
            hostname: req.hostname,
            baseUrl: req.baseUrl,
            path: req.path,
            startTime: Date.now()
        };
    }

    return id;
}

/**
 * set end point
 * @param {*} id - collctor id
 * @param {*} req - express request
 * @param {*} res - express response
 */
function end(id, req, res) {
    if (collector[id]) {
        collector[id]['endTime'] = Date.now();
        collector[id]['status'] = res.statusCode;
    }

    return id;
}

/**
 * remove item by id
 * @param {string} id 
 */
function remove(id) {
    delete collector[id];
}

/**
 * get item by id
 * @param {string} id 
 */
function get(id) {
    return collector[id];
}

module.exports = function () {
    return {
        start,
        end,
        remove,
        get
    };
};
