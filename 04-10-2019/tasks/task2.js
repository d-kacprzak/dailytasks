// Mamy tablicę:
// Policz sumę wszystkich liczb w tablicy.
// Następnie wypisz w konsoli tą sumę oraz średnią liczb.


const tab = [1,2,3, [4,5,6, [7, 8,]], 9, 10];
const newTab =  tab.flat(2);
console.log(newTab);

let sumNumbers = 0;

for(let i = 0; i < newTab.length; i++){
     sumNumbers += newTab[i];
}
console.log(sumNumbers);





