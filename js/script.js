"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

/* const a = prompt ('Один из последних просмотренных фильмов?', ''),
			b = prompt ('На сколько вы оцените его?', ''),
			c = prompt ('Один из последних просмотренных фильмов?', ''),
			d = prompt ('На сколько вы оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

first: for (let i = 0; i < 2; i++) {
	const a = prompt ('Один из последних просмотренных фильмов?', ''),
				b = prompt ('На сколько вы оцените его?', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('Error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log('Просмотренно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);




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