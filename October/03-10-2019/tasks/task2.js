// Mamy tablicę:
//
//Posortuj ją po długościach kolejnych elementów. Na początku powinien być najkrótszy tekst, na końcu najdłuższy. Następnie napisz, ile liter mają wszystkie elementy razem.

const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotrek",
    "Beata"
];

names.sort((a ,b) =>{
   const aLength = a.length;
   const  bLenght = b.length;
   return aLength - bLenght
});

console.log(names);


for(let i = 0; i < names.length; i++){
    console.log(`Element ${i} tablicy names "${names[i]}"  ma długość: ${names[i].length} liter`)
}
