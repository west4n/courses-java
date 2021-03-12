'use strict'; //говорим, что работаем только в новом формате (строгий режим)

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



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const q1 = prompt('Один из последних просмотренных фильмов?', ''),
              q2 = prompt('На сколько оцените его?', '');
    
        if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
            personalMovieDB.movies[q1] = q2;
        } else {
            i--;
        } 
    }
}

rememberMyFilms();
// let i = 0;

// while (i < 2) {
//     const q1 = prompt('Один из последних просмотренных фильмов?', '');
//     const q2 = prompt('На сколько оцените его?', '');

//     i++;

//     if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
//         personalMovieDB.movies[q1] = q2;
//     } else {
//         i--;
//     } 
// }

// do {
//     const q1 = prompt('Один из последних просмотренных фильмов?', '');
//     const q2 = prompt('На сколько оцените его?', '');

//     i++;

//     if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
//         personalMovieDB.movies[q1] = q2;
//     } else {
//         i--;
//     } 
// }
// while (i < 2);


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`, '');
    }
}

writeYourGenres();