'use strict';

const buttons = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(buttons[0].classList.length); // количество классов
// console.log(buttons[0].classList.item(0)); // класс по порядку
// console.log(buttons[1].classList.add('red')); // добавление класса
// console.log(buttons[0].classList.remove('red')); // удаление класса
// console.log(buttons[0].classList.toggle('red')); // добавление класса или удаление существующего

// if (buttons[1].classList.contains('red')) {
//     console.log('red');
// }

// buttons[0].addEventListener('click', () => {
//    // if (!buttons[1].classList.contains('red')) {
//    //     buttons[1].classList.add('red');
//    // } else {
//    //     buttons[1].classList.remove('red');
//    // }
//
//     buttons[1].classList.toggle('red');
// });

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);