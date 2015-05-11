'use strict';

let Bluebird = require('bluebird');
let common = require('../common');

function work() {
    return Bluebird.resolve(0)
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(common.check);
}

common.init('Bluebird promises (default, closures created inside loop)');
common.run(work);
