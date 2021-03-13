'use strict'; //говорим, что работаем только в новом формате (строгий режим)

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
    console.log('Hello');
  }
};

const jonh = Object.create(soldier);


jonh.sayHello();


// const john = {
//   health: 100,
// };

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);