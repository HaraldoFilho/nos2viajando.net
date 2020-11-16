#!/bin/bash

echo "user = 'hpfilho'" > config.py
echo "photoset_id = '$1'" >> config.py
echo "photo_privacy = 1" >> config.py
echo "geo_privacy = 1" >> config.py
echo "dont_map_tag = 'DontMap'" >> config.py

