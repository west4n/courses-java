'use strict'; //говорим, что работаем только в новом формате (строгий режим)

  const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
      border: 'black',
      bg: 'red'
    },
    makeTest: function() {
      console.log('test');
    }
  };

  const {boreder, bg} = options.colors; // деструктуризация объекта

  options.makeTest();

console.log(Object.keys(options).length);

console.log(options.colors);

delete options.name;

console.log(options);

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
  
}