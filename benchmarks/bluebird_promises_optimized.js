'use strict';

let Bluebird = require('bluebird');
let common = require('../common');
let increment = common.increment;
let check = common.check;

function work() {
    return Bluebird.resolve(0)
        .then(increment)
        .then(increment)
        .then(increment)
        .then(increment)
        .then(increment)
        .then(check);
}

common.init('Bluebird promises (optimized, no closures inside loop)');
common.run(work);
