'use strict'; //говорим, что работаем только в новом формате (строгий режим)

// String

// 1.
console.log(typeof(String(null))); //string

// 2.
console.log(typeof(5 + '')); //string

const fontSize = 26 + 'px';

// Number

// 1.
console.log(typeof(Number('5')));

// 2.
console.log(typeof(+'5'));

// 3.
console.log(typeof(parseInt('15px', 10)));

// Boolean

// 1.

// false - 0, '', null, undefined, NaN; все остальное - true

let switcher = null;

if (switcher) {
  console.log('Working...'); 
}

switcher = 1;

if (switcher) {
  console.log('Working...');
}

// 2.
console.log(typeof(Boolean('5')));

// 3.
console.log(typeof(!!'4'));