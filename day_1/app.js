'use strict'; //говорим, что работаем только в новом формате (строгий режим)

let number = 5; //let - изменяемая переменная
const leftBorderWidth = 1; //const - неизменяемая переменная

number = 10; //изменили переменную
console.log(number);

const obj = { //прямых констант в JavaScript не бывает
  a: 50
};

obj.a = 10;
console.log(obj);

console.log(name);
var name = 'Ivan'; //var существуеют еще до того как была объявлена в коде

{
  let result = 50; //переменная существует только в фигурных скобках
}