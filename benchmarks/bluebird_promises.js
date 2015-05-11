'use strict';

let Bluebird = require('bluebird');
let common = require('../common');
let check = common.check;

function work() {
    return Bluebird.resolve(0)
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(check);
}

common.init('Bluebird promises (default, closures created inside loop)');
common.run(work);
