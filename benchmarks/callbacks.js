'use strict';

let common = require('../common');
let check = common.check;

function step(value) {
    process.nextTick(function(val) {
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
