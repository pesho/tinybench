'use strict';

let Bluebird = require('bluebird');
let common = require('../common');

function work() {
    return Bluebird.resolve(0)
        .then(common.increment)
        .then(common.increment)
        .then(common.increment)
        .then(common.increment)
        .then(common.increment)
        .then(common.check);
}

common.init('Bluebird promises (optimized, no closures inside loop)');
common.run(work);
