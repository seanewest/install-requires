#!/usr/bin/env bash

echo 'installing missing dependencies...'
browserify $@ -t installify > /dev/null
echo 'install-requires complete'