"use strict";

let common = require('./common');
let counter = common.iterations;

function work() {
    return Promise.resolve(1)
        .then(function() { return 2; })
        .then(function() { return 3; })
        .then(function() { return 4; })
        .then(function() { return 5; })
        .then(function() {
            --counter;
            if (counter <= 0) {
                console.timeEnd('Native promises');
                process.exit();
            }
        });
}

console.time('Native promises');
for (let i = common.iterations; i > 0; --i) work();
