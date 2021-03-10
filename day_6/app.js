'use strict'; //говорим, что работаем только в новом формате (строгий режим)

// Условия
if (4 == 9) { // Условия превращают любой тип данных в буллиновый
    console.log('Верно!');
} else {
    console.log('Не верно!');
}

const num = 50;

if (num < 49) {
    console.log('Ошибка');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Хорошо');
}

(num === 50) ? console.log('OK') : console.log('ERROR'); // сокращенный вид, тернарный оператор

switch (num) { // Проверка на строгое сравнение
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('не в этот раз');
}