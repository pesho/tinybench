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

common.init('Native promises (optimized, no closures inside loop)');
common.run(work);
