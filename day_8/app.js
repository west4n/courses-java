'use strict'; //говорим, что работаем только в новом формате (строгий режим)

function showFirstMessage(text) { // в круглых скобках мы записываем аргументы функции
    console.log(text);
    let num = 20; // существует локально, только внутри функции
}

showFirstMessage('Hello World!'); // Передаем данные аргумента в функцию
                                  // Function declaration - существуют до объявления
function calc(a, b) {
    return (a + b); 
}

console.log(calc(4, 5));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() { // function expression - можно вызвать только после объявления
    console.log('Hello World!');
};

logger();

const calcSecond = (a, b) => a + b;