'use strict';

let Bluebird = require('bluebird');
let common = require('../common');
let check = common.check;

let work = Bluebird.coroutine(function* work() {
    let value = 0;
    value = yield Bluebird.resolve(value + 1);
    value = yield Bluebird.resolve(value + 1);
    value = yield Bluebird.resolve(value + 1);
    value = yield Bluebird.resolve(value + 1);
    value = yield Bluebird.resolve(value + 1);
    check(value);
});

common.run('Bluebird coroutines (promises + generators)', work);
