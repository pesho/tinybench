#!/usr/bin/env sh

# io.js is required for now:
NODE=iojs

$NODE ./test_native_promises.js
$NODE ./test_bluebird.js
$NODE ./test_bluebird_coroutine.js
