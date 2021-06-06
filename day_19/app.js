'use strict'; // используем строгий режим

console.log(document.body); //получаем DOM body
console.log(document.head); // получаем DOM head
console.log(document.documentElement); // получаем DOM HTML
console.log(document.body.childNodes); // получаем все ноды body
console.log(document.body.firstChild); // получаем ноды родителя первую
console.log(document.body.lastChild); // получаем ноды родителя последнюю
console.log(document.querySelector('#current').parentNode); // получаем узел ребенка
console.log(document.querySelector('#current').parentNode.parentNode); // получаем узел ребенка на одного родителя выше
console.log(document.querySelector('[data-current="3"]').nextSibling); // получаем следующую ноду
console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получаем следующий ЭЛЕМЕНТ
console.log(document.querySelector('[data-current="3"]').previousSibling); // получаем предыдущую ноду
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}