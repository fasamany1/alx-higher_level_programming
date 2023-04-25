#!/usr/bin/node

// Load the necessary modules
const fs = require('fs');
// Get the file path from command line arguments
const filePath = process.argv[2];

// Read the contents of the file
fs.readFile(filePath, 'utf-8', (error, content) => {
  if (error) {
    // Print the error object if an error occurred
    console.log(error);
  } else {
    // Print the contents of the file
    console.log(content);
  }
});
