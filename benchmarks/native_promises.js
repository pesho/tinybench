'use strict';

let common = require('../common');

function work() {
    return Promise.resolve(0)
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(function(value) { return value + 1; })
        .then(common.check);
}

common.init('Native promises (default, closures created inside loop)');
common.run(work);
