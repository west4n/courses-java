'use strict'; //говорим, что работаем только в новом формате (строгий режим)

// ТИПЫ ДАННЫХ

let number = 4; //числовой тип данных
  console.log(4/0); //Infinity
  console.log(-4/0); //-Infinity
  console.log('string' * 9); //NaN (Not a Number)

const person = 'Alex'; // строковой тип данных (записывается в кавычках "",'')
const bool = true; //булиновый тип данных, либо true, либо fales

//console.log(something); // тип данных null (чего вообще не существует)

let und;
console.log(und); //тип данных undefined (переменная существует, но в ней ничего нет)

//ОБЪЕКТЫ

const obj = { //Объект
  name: 'Ivan', //метод (свойство объекта (ключ: значение))
  age: 28,
  isMarried: true
};

console.log(obj.name); //обращение к свойству объекта

let array = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, []]; //массив (частный случай объекта)
console.log(array[0]);