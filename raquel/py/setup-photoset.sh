#!/bin/bash

RUN_DIR="/home/pi/github/nos2viajando.net/raquel/py"

echo "user = 'quelrr'" > $RUN_DIR/config.py
echo "photoset_id = '$1'" >> $RUN_DIR/config.py
echo "photo_privacy = 1" >> $RUN_DIR/config.py
echo "geo_privacy = 1" >> $RUN_DIR/config.py
echo "dont_map_tag = 'DontMap'" >> $RUN_DIR/config.py
