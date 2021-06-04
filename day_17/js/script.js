'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for(let i = 0; i < hearts.length; i++) {

//   hearts[i].style.backgroundColor = 'blue';

// }

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div); // устаревший метод

// wrapper.prepend(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[0]); // устаревший метод

// circles[0].remove();
// wrapper.removeChild(hearts[1]); // устаревший метод

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // устаревший метод

div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = 'Hello';
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');