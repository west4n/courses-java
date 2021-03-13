'use strict'; //говорим, что работаем только в новом формате (строгий режим)

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1
};

// const copy = obj; // передает ссылку на объект
// copy.a = 10;

// console.log(obj);
// console.log(copy);

function copy(mainObj) {
  let objCopy = {};
  let key;

  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4
  }
};

// const newObj = copy(numbers);
// newObj.a = 10;
// console.log(newObj);
// console.log(numbers);

const add = {
  x: 15,
  y: 16
};

console.log(Object.assign(numbers, add)); // метод позволяет добавить новый объект к существ.

const oldArray = [1, 2, 3, 4];
const newArray = oldArray.slice(); // метод создает копию массива

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook']; //spread оператор помогает скопировать массивы

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = [1, 2, 3];

const newAarray = [...array];
const q = {
  one: 1,
  two: 2,
  three: 3
};
const bq = {...q};