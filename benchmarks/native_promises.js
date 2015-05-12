'use strict';

let common = require('../common');
let check = common.check;

function work() {
    return Promise.resolve(0)
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(check);
}

common.run('Native promises (default, closures created inside loop)', work);
