#install-requires

**Warning: this module is currently in a dirty-hack stage.**

Install all dependencies require'd within your JS code without needing a package.json. Intended for quick and dirty prototyping.

## Why?
* Copy and paste code and run it (almost) immediately.
* Throw together scratch code without having to set up a package.json.
* Be lazy

## Installation
```
npm install -g install-requires
```

## Usage
Recursively walk through all dependencies in a js file and install any that are missing:
```
install-requires mycode.js
```

You can also include multiple js files:
```
install-requires mycode.js mycode2.js mycode3.js
```

## Features wanted
* print the dependencies that are being installed
* option to ```--save``` or ```--save-dev``` when a package.json exists:
* don't be a dirty hack

## It's a dirty hack
Currently this abuses [browserify](https://github.com/substack/node-browserify) and [installify](https://github.com/hughsk/installify) to get the job done. This should be written in a more dignified way, but works as is for now. Here's the entire code:
```bash
#!/usr/bin/env bash

echo 'installing missing dependencies...'
browserify $@ -t installify > /dev/null
echo 'install-requires complete'
```