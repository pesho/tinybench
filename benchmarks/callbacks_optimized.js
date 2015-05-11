'use strict';

let common = require('../common');
let check = common.check;

function stepInner(value) {
    if (value < 5) {
        step(value + 1);
    } else {
        check(value);
    }
}

function step(value) {
    process.nextTick(stepInner, value);
}

function work() {
    step(0);
}

common.init('Callbacks (optimized, no closure inside loop)');
common.run(work);
