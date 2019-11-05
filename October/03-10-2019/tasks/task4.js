// Mamy tablicę:

// Za pomocą dowolnej pętli wypisz w konsoli imiona użytkowników, którzy są pełnoletni.Dodatkowe - spróbuj zrobić to zadanie także za pomocą odpowiedniej do tego celu funkcji.

const tabUsers = [
    {
        name : "Marcin",
        age: 14
    },
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
];
console.group("%c console.log z pętli", "color: red");
for(let i = 0; i < tabUsers.length; i++ ){
    if(tabUsers[i].age >= 18){
        console.log(tabUsers[i].name);
    }
}
console.groupEnd();
console.group("%c console.log z funkcji", "color: violet");

const ageUpper = (array)=> {
     array.filter(({name, age}) => {
         return age >= 18 ? console.log(name) : ""
     });
};

ageUpper(tabUsers);

