#!/usr/bin/node

"use strict"
const request = require('request');
const url = process.argv[2];
// Define the ID of the Wedge Antilles character
const characterId = '18';
let count = 0;

// Make a GET request to the specified API URL
request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    // Parse the response body as JSON
    const film = JSON.parse(body);
    film.results.forEach((film) => {
      film.characters.forEach((character) => {
        if (character.includes(characterId)) {
          count += 1;
        }
      });
    });
    // Print the number of films where Wedge Antilles appears
    console.log(count);
  }
});
