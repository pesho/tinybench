'use strict';

let common = require('../common');

function work() {
    return Promise.resolve(0)
        .then(common.increment)
        .then(common.increment)
        .then(common.increment)
        .then(common.increment)
        .then(common.increment)
        .then(common.check);
}

common.init('Native promises');
common.run(work);
