'use strict';

let common = require('../common');
let check = common.check;
let scheduler = process.nextTick;

function step(value) {
    scheduler(function(val) {
        if (val < 5) {
            step(val + 1);
        } else {
            check(val);
        }
    }, value);
}

function work() {
    step(0);
}

common.init('Callbacks (default, closure created inside loop)');
common.run(work);
