"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	} 
}

start();

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

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
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
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотренно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = promt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();


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

// * Функции


/* function showFirstMessage (text) {
	console.log(text);
}

showFirstMessage('Hello World');  */

/* function calc(a, b) {
	return (a + b);
}
console.log(calc(4, 3)); */

/* function ret () {
	let num =50;
	return num;
}
const anotherNum = ret ();
console.log(anotherNum); */

// * Методы и свойства у строк и чисел

/* const str = "test";
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length); */

/* const logg = 'Hello world';
console.log(logg.substr(7, 5)); */

/* const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test)); */