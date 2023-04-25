#!/usr/bin/node

// Importing required modules
const request = require('request');
const fs = require('fs');
// Reading command line arguments
const url = process.argv[2];
const file = process.argv[3];

// Making GET request to the given URL
request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    // Writing the response to the file
    fs.writeFile(file, body, 'utf8', (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
});
