const numbers2 = [80, 3, 14, 22, 30];
//  console.log(numbers2.map(n => n > 20));
var evens = numbers2.filter(n => n > 20);

evens = evens.filter(x => x % 2 === 0)
// console.log(evens.map(n => n > 20));
console.log(evens);
// pares mayores a 20]

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(evens.reduce(reducer));