#!/usr/bin/node

const request = require('request');
const starWarsUrl = `https://swapi-api.alx-tools.com/api/films/`.concat(process.argv[2]);

// Make a request to the specified URL
request(starWarsUrl, function (_err, _res, body) {
	// Parse the response body as JSON
	body = JSON.parse(body);
	// Print the movie title
	console.log(body.title);
});
