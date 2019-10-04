// Policz ile w tym zdaniu jest liter (bez spacji), oraz ile jest wyrazów. Obie liczby wypisz w konsoli w ładnym tekście


const txt = "Turlał goryl po Urlach kolorowe korale";
const txtLenght = txt.split(" ").join("");
console.log(`%cW zdaniu są ${txtLenght.length} litery.`, "color: orange");

const newText = txt.split(" ");
console.log(`%cW zdaniu jest ${newText.length} wyrazów.`, "color: lightblue");


