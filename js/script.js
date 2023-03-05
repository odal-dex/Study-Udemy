"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
			b = prompt ('На сколько вы оцените его?', ''),
			c = prompt ('Один из последних просмотренных фильмов?', ''),
			d = prompt ('На сколько вы оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
console.log(numberOfFilms);







//УЛОВИЯ

/* let num = 50;
while (num <= 55) {
	console.log(num);
	num++;
} */
/* for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
} */

// *
// **
// ***
// ****
// *****
// ******

/* let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {
	
	for (let j = 0; j < i; j++) {
		result += "*";
	}
	result += '\n';
} 

console.log(result); */

// let result = '';
// const lenght = 7;

/* first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log(`Third level: ${k}`);
		}
	}
} */