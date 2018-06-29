function Construct(text) {
  this.text = "текст";
  console.log("this === window", this === window);
}
/*
console.log("Вызов как обычной функции  - без new:");
console.log(this.text); // undefined
Construct();
console.log(this.text); // текст
*/


console.log('Вызов как конструктор - с new:');
const cons = new Construct();   // this === window false
console.log('cons is ', typeof cons);  // cons is  object
console.log('Construct is ', typeof Construct); // Construct is  function
console.log(cons.text);  // текст




