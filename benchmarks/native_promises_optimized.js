'use strict';

let common = require('../common');
let increment = common.increment;
let check = common.check;

function work() {
    return Promise.resolve(0)
        .then(increment)
        .then(increment)
        .then(increment)
        .then(increment)
        .then(increment)
        .then(check);
}

common.run('Native promises (optimized, no closures inside loop)', work);
