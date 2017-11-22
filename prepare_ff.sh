#!/bin/bash
EXT_DIRNAME=./OSDE_FF
EXT_SRC=./src

rm -rf $EXT_DIRNAME

mkdir -pv $EXT_DIRNAME


SRC_DIR=.
DST_DIR=$EXT_DIRNAME

#copy info files
for I_DIR in AUTHORS COPYING CREDITS LICENSE; do
  cp -va $SRC_DIR/$I_DIR $DST_DIR/
done


SRC_DIR=$EXT_SRC
DST_DIR=$EXT_DIRNAME

#copy common files
for I_DIR in background.js background.html ; do
  cp -va $SRC_DIR/$I_DIR $DST_DIR/
done


cp -va $SRC_DIR/manifest.json.ff $DST_DIR/manifest.json
cp -va $SRC_DIR/browser_ff.js    $DST_DIR/browser.js


for I_DIR in img rdf-editor; do
  mkdir -pv $DST_DIR/$I_DIR
  tar --exclude 'original' -cf - -C $SRC_DIR/$I_DIR .|tar -xf - -C $DST_DIR/$I_DIR
done

