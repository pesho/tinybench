'use strict';

let config = require('./config');
let counter;
let strategy;

function init(strategyName) {
    counter = config.iterations;
    strategy = strategyName;
    console.time(strategy);
}

function increment(value) {
    return value + 1;
}

function check(value) {
    if (value !== 5) {
        console.error('Incorrect value', value);
        process.exit(1);
    }
    --counter;
    if (counter === 0) {
        console.timeEnd(strategy);
    }
}

function run(workFunction) {
    for (let i = config.iterations; i > 0; --i) workFunction();
}

exports.init = init;
exports.increment = increment;
exports.check = check;
exports.run = run;
