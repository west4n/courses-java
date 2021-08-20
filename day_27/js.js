'use strict';

// Filter
const names = ['Ivan', 'Alex', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
    return name.length < 5;
})

console.log(shortNames);

// Map
const answers = ['IvAn', 'AnnA', 'HELL'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

// Every/Some
const some = [4, 'qwerty', 'qwerty2'];
console.log(some.some(item => typeof (item) === 'number'));
console.log(some.every(item => typeof (item) === 'number'));

// Reduce
const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);

const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0])

console.log(newArr)
