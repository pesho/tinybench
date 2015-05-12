'use strict';

let util = require('util');
let config = require('./config');
let counter;
let memMax;
let finalize;

function increment(value) {
    return value + 1;
}

function check(value) {
    if (value !== 5) {
        console.error('Incorrect value', value);
        process.exit(1);
    }
    --counter;
    if (counter % 1024 === 0) memMax = Math.max(memMax, process.memoryUsage().rss);
    if (counter === 0) {
        finalize();
    }
}

function run(strategyName, workFunction) {
    console.log();
    console.log(strategyName+':');
    let memStart = process.memoryUsage().rss;
    memMax = memStart;
    // Warm up:
    counter = config.warmup;
    finalize = function() {
        let startTime, initialTime = Date.now();
        do { startTime = Date.now(); } while (startTime === initialTime);
        // Run benchmark:
        counter = config.iterations;
        finalize = function() {
            let time = Date.now() - startTime;
            console.log('    time: '+time+' ms');
            console.log('    memory: '+(memMax - memStart)/(1024*1024)+' MB');
        };
        for (let i = config.iterations; i > 0; --i) workFunction();
    };
    for (let i = config.warmup; i > 0; --i) workFunction();
}

exports.increment = increment;
exports.check = check;
exports.run = run;
