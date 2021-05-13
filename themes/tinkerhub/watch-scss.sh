#!/usr/bin/env bash
### This file will watch and build less files
### make sure that you have http://lesscss.org/ and https://github.com/emcrisostomo/fswatch installed
echo "Watching less file changes..."
set -e
cd less/
fswatch -0 --recursive --exclude=".*" --include="\\.less$" . | xargs -0 -n1 lessc index.less ../static/index.css