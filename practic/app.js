'use strict'; //говорим, что работаем только в новом формате (строгий режим)

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const q1 = prompt('Один из последних просмотренных фильмов?', ''),
          q2 = prompt('На сколько оцените его?', '');

    if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
        personalMovieDB.movies[q1] = q2;
    } else {
        i--;
    } 
}

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

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка!');
}

console.log(personalMovieDB);