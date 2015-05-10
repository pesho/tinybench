"use strict";

let Bluebird = require('bluebird');
let common = require('./common');
let counter = common.iterations;

let work = Bluebird.coroutine(function* work() {
    yield Bluebird.resolve(1);
    yield Bluebird.resolve(2);
    yield Bluebird.resolve(3);
    yield Bluebird.resolve(4);
    yield Bluebird.resolve(5);
    --counter;
    if (counter <= 0) {
        console.timeEnd('Bluebird coroutines');
        process.exit();
    }
});

console.time('Bluebird coroutines');
for (let i = common.iterations; i > 0; --i) work();
