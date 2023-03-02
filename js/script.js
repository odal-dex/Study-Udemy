"use strict";

const numberOfFilms = +promt('Сколько фильмов вы уже посмотрели?', ''); // Добавить плюс что бы данные от пользователя были в цифрах

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = promt ('Один из последних просмотренных фильмов?', '');
const b = promt ('На сколько вы оцените его?', '');
const c = promt ('Один из последних просмотренных фильмов?', '');
const d = promt ('На сколько вы оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
console.log(numberOfFilms);