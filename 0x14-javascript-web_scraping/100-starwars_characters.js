#!/usr/bin/node
// Above line ensures that the script is run with Node.js
// and not any other program

// Load necessary modules
const request = require('request');

// Get the movie ID from command line argument
const movieId = process.argv[2];
// Define the URL for the Star Wars API
const url = `https://swapi.dev/api/films/${movieId}/`;

// Make a request to the API
request.get(url, (error, response, body) => {
  // If an error occurred, log it and exit the program
  if (error) {
    console.log(error);
    return;
  }

  // Parse the response body from JSON
  const data = JSON.parse(body);
  // Extract the characters array from the movie data
  const characters = data.characters;

  // Loop through the characters and print their names
  for (const character of characters) {
    request(character, (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }
      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  }
});
