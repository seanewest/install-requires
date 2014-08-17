#!/usr/bin/env node

var browserify = require('browserify');
var path = require('path');
var util = require('util');

var args = process.argv.slice(2);
var cwd = process.cwd();

var files = args.map(function (arg) {
	return path.resolve(cwd, arg);
});

console.log('installing dependencies...');

var b = browserify(files);
b.transform('installify');
b.bundle();

console.log('done')