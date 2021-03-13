'use strict'; //говорим, что работаем только в новом формате (строгий режим)

const arr = [1, 2, 3, 6, 8];
console.log(arr.sort(compaireNum));
function compaireNum(a, b) {
  return a - b;
}

// // arr[99] = 0;
// // console.log(arr.length); // покажет 100 элементов, хотя их 6
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// // arr.pop(); // метод удаляет последний элемент из массива
// // console.log(arr);

// // arr.push(10); // метод добавляет элемент в конец массива
// // console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

const str = prompt('', '');
const products = str.split(', '); // метод позволяет создать массив через разделитель
products.sort(); // метод сортирует массив в алфавитном порядке
console.log(products.join('; ')); // метод позволяет превратить массив в строку через разделитель