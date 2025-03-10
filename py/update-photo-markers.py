#!/usr/bin/python3

import flickrapi
import api_credentials
import os

#===== CONSTANTS =================================#

api_key = api_credentials.api_key
api_secret = api_credentials.api_secret
user_id = api_credentials.user_id

# Flickr api access
flickr = flickrapi.FlickrAPI(api_key, api_secret, format='parsed-json')

from photosets import photosets

for photoset in photosets:

    print("Generating markers for photoset {}".format(photoset))
    command = "/home/pi/github/nos2viajando.net/py/setup-photoset.sh {}".format(photoset)
    os.system(command)

    command = "rm /home/pi/github/nos2viajando.net/py/last_total.py"
    os.system(command)

    command = "/home/pi/github/nos2viajando.net/py/generate-map-data.py"
    os.system(command)

command = "cp /home/pi/github/nos2viajando.net/py/locations.py /home/pi/github/nos2viajando.net/data/photos.js"
os.system(command)
