'use strict'; //говорим, что работаем только в новом формате (строгий режим)

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const q1 = prompt('Один из последних просмотренных фильмов?', ''),
                  q2 = prompt('На сколько оцените его?', '');
        
            if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
                personalMovieDB.movies[q1] = q2;
            } else {
                i--;
            } 
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка!');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Ваш любимый жанр через запятую`, '').toLocaleLowerCase();

            if (genres != null && genres != '') {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } else {
                i--;
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимы жанр #${i + 1} - это ${item}`);
            });
        }
    },
    toggleVisibleMyDB: function() {

        if (personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }

    }
};