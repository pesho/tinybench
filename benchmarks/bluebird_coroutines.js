'use strict';

let Bluebird = require('bluebird');
let common = require('../common');

let work = Bluebird.coroutine(function* work() {
    let value = 0;
    value = yield Bluebird.resolve(value + 1);
    value = yield Bluebird.resolve(value + 1);
    value = yield Bluebird.resolve(value + 1);
    value = yield Bluebird.resolve(value + 1);
    value = yield Bluebird.resolve(value + 1);
    common.check(value);
});

common.init('Bluebird coroutines (promises + generators)');
common.run(work);
