#!/usr/bin/node

"use strict"
const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    // Parse the response body as JSON
    const movie = JSON.parse(body);
    // Print the movie title if the episode number matches the given ID
    if (movie.episode_id====parseInt(movieId)) {
      console.log(movie.title);
    }
  }
});