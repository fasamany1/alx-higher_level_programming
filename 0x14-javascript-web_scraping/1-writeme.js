#!/usr/bin/node

// Load the necessary modules
const fs = require('fs');
// Get the file path from command line arguments
const filePath = process.argv[2];
const content = process.argv[3];


// Read the contents of the file
fs.writeFile(filePath, content, 'utf-8', (error) => {
  if (error) {
    // Print the error object if an error occurred
    console.log(error);
  }
});
