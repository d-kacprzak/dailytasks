// Stwórz tablicę 10 losowych całkowitych liczb z przedziału 10 - 20. Po utworzeniu tablicy wypisz w konsoli jej największy i najmniejszy element. Zadanie wykonaj za pomocą dowolnej pętli. Czy znasz lepszy sposób od zastosowania pętli?

let arr = [];
let min = 10;
let max = 20;

for(let i = 0;i < 10; i++){
    arr.push(Math.floor(Math.random() * (max - min + 1) + min))
}
console.group(`%c Pętla for`, 'color: orange');

console.log(`
Najmniejszy element: ${Math.min(...arr)}
Największy element: ${Math.max(...arr)}`,);
console.log(arr);
console.groupEnd();


const randomArray = (length, min, max,) => {
    const myArray = Array(length).fill().map(() => Math.round(Math.random() * (max - min + 1) + min));
    return myArray
};
console.group(`%c Fill`, 'color: pink');

console.log(...randomArray(50,10,30));

console.log(`
Najmniejszy element: ${Math.min(...randomArray(50,10,30))}
Najwięszy element: ${Math.max(...randomArray(50,10,30))}`);

console.groupEnd();