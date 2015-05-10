"use strict";

let Bluebird = require('bluebird');
let common = require('./common');
let counter = common.iterations;

function work() {
    return Bluebird.resolve(1)
        .then(function() { return 2; })
        .then(function() { return 3; })
        .then(function() { return 4; })
        .then(function() { return 5; })
        .then(function() {
            --counter;
            if (counter <= 0) {
                console.timeEnd('Bluebird promises');
                process.exit();
            }
        });
}

console.time('Bluebird promises');
for (let i = common.iterations; i > 0; --i) work();
