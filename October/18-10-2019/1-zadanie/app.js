// zadanie 1

const listNumbers = [2, 5, 7, 10, 34, 16, 879, 1];

const getEvenNumber = listNumbers.filter((cur) => cur % 2 === 0);
console.log(getEvenNumber);

// Zadanie 2

const person = { name: 'Jill', age: 25, hobby: 'sports' };

function sayHello(obj) {
  const getName = obj.name;
  (getName !== '') ? console.log(`Hello ${getName}`) : console.log('Hello');
}
sayHello(person);

// Zadanie 3

const students = ['John', 'Bill', 'Emma', 'Stella', 'Rob'];

const getPerson = (array) => array[Math.floor(Math.random() * array.length)];

console.log(getPerson(students));
