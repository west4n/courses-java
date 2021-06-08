'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

btn.addEventListener('click', () => {
   // if (box.style.height == 350 + 'px') {
   //     box.style.height = box.scrollHeight + 'px';
   // } else {
   //     box.style.height = 350 + 'px';
   // }
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box).display;
console.log(style);