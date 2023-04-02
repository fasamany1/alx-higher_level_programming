#!/usr/bin/python3
"""Fetch a URL (https://alx-intranet.hbtn.io/status) status"""
import urllib.request


url = "https://alx-intranet.hbtn.io/status"

with urllib.request.urlopen(url) as response:
    html = response.read()

print("- Body response:\n\t- type: {}\n\t- content: {}\n\t- utf8 content: {}"
      .format(type(html), html, html.decode('utf-8')))

