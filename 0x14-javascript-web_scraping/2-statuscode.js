#!/usr/bin/node

"use strict"
const request = require('request');
const url = process.argv[2];

// Make a GET request to the specified URL
request.get(url, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    // Print the status code of the response  
    console.log(`code: ${response.statusCode}`);
  }
});
