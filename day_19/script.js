'use strict'; // Используем строгий режим
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode.parentNode);

console.log(document.querySelector('[data-current="3"]').nextSibling);