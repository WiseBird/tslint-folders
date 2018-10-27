#!/usr/bin/env bash

# assumption: the machine has an environment variable TEMP pointing to a temporary files location.

TEMP_OUT_DIR=$TEMP

OUT_DOT_PATH=$TEMP_OUT_DIR/tslint-folders-docs.dot;
OUT_IMAGE_PATH=$TEMP_OUT_DIR/tslint-folders-docs.png;

PATH_TO_TSLINT_JSON=$1;

ECHO yarn docs ...;
yarn docs $PATH_TO_TSLINT_JSON Text > $OUT_DOT_PATH;

# xxx
OUT_DOT_PATH=xxx.dot

ECHO dot ...;
dot $OUT_DOT_PATH -Tpng -o $OUT_IMAGE_PATH;

ECHO graph image is at $OUT_IMAGE_PATH;

ECHO [done];
