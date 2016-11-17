#!/usr/bin/env node

var execSync = require('child_process').execSync;

execSync('npm install');
execSync('npm prune');
execSync('npm update');
