#!/usr/bin/env sh

# io.js is required for now:
NODE=iojs

DIR_SCRIPT=`dirname "$0"`
DIR_BENCH=$DIR_SCRIPT/benchmarks

$NODE $DIR_BENCH/native_promises.js
$NODE $DIR_BENCH/native_promises_optimized.js
$NODE $DIR_BENCH/bluebird_promises.js
$NODE $DIR_BENCH/bluebird_promises_optimized.js
$NODE $DIR_BENCH/bluebird_coroutines.js
$NODE $DIR_BENCH/callbacks.js
$NODE $DIR_BENCH/callbacks_optimized.js
