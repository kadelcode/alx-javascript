#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2]
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
	if (error) {
		console.error(error);
		return;
	}
	if (response.statusCode !== 200) {
		console.error(`Failed to fetch data. Status code: ${response.statusCode}`);
		return;
	}

	const movie = JSON.parse(body);
	const charactersUrls = movie.characters;

	const printCharacterName = (characterUrl) => {
		request.get(characterUrl, (error, response, body) => {
			if (error) {
				console.error(error);
				return;
			}
			if (response.statusCode != 200) {
				console.error(`Failed to fetch data. Status code: ${response.statusCode}`);
				return;
			}

			const character = JSON.parse(body);
			console.log(character.name);
		});
	};

	// Print character names in the order specified by the charactersUrls array
	charactersUrls.forEach(printCharacterName);
});
