// Zadanie 3

const prod1 = {
    name : "Orzechy laskowe",
    price: 2.23,
    weight: 3
};

const prod2 = {
    name: "Orzechy włoskie",
    price: 6.45,
    weight: 42
};

console.log(`Produkt numer jeden to: ${prod1.name}`);
console.log(`Produkt numer dwa to: ${prod2.name}`);

console.log(`Produkty kosztują razem: ${prod1.price + prod2.price}`);

console.log(`Produkty ważą razem: ${prod1.weight + prod2.weight}`);

// Zadanie 4
const currentUser = {
    name: "Damian",
    surname: "Kacprzak",
    email: "d.kacprzak@hotmail.com",
    www: "brak",
    userType: "Admin",
    show(){
        console.log(`Imię: ${this.name}`);
        console.log(`Nazwisko: ${this.surname}`);
        console.log(`email: ${this.email}`);
        console.log(`Adres strony www: ${this.www}`);
        console.log(`userType to: ${this.userType}`);
    },
};

currentUser.show();

// Zadanie 5
const book = {
    title:  "Władca Pierścieni. Trylogia: Drużyna Pierścienia, Dwie wieże, Powrót króla",
    author: "J.R.R. Tolkien",
    pageCount: 1278,
    publisher: "Czytelnik",
    showDetails() {
        for (const key in book) {
            if (book[key] === this.showDetails){
                return ""
            }else{
                console.log(`Klucz : ${key} wartość: ${book[key]}`)

            }

        }

    }
};

book.showDetails();
