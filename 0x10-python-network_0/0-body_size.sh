#!/bin/bash
# send request to a URL with curl, and display the size of its body
curl -s "$1" | wc -c
