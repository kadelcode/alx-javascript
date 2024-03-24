#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data. Status code: ${response.statusCode}`);
    return;
  }

  const films = JSON.parse(body).results;

  const wedgeAntillesMovies = films.filter(film => film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/'));

  console.log(wedgeAntillesMovies.length);
});
