'use strict'; //говорим, что работаем только в новом формате (строгий режим)

function first() {
  // Do something
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`Я учу ${lang}`);
  callback();
}

learnJS('JavaScript', function() {
  console.log('Я прошел этот урок');
});