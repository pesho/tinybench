'use strict';

let common = require('../common');
let check = common.check;
let scheduler = process.nextTick;

function step(value) {
    if (value < 5) {
        scheduler(step, value + 1);
    } else {
        scheduler(check, value);
    }
}

function work() {
    step(0);
}

common.run('Callbacks (optimized, no closures inside loop)', work);
