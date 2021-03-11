'use strict'; //говорим, что работаем только в новом формате (строгий режим)

// Методы - это вспомогательные функции
// Свойства - это вспомогательные значения

const str = 'test';

console.log(str.length); // свойство элемента пишется после точки
console.log(str.toUpperCase()); // методы пишутся со скобками, так как они выполняют какое-то действие

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); // метод "поиск подстроки"

const logg = 'Hello World';

console.log(logg.slice(6, 11)); // метод вырезает то, что нам нужно
console.log(logg.substring(6, 11)); // метод вырезает то, что нам нужно
console.log(logg.substr(6, 5)); // метод вырезает по количеству символов

const num = 12.2;

console.log(Math.round(num)); // Округляет число

const test = '12.2px';

console.log(parseInt(test)); // Возвращает целое число
console.log(parseFloat(test)); // Возвращает десятичное число