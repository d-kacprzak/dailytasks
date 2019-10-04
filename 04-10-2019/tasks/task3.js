// Stwórz funkcję `monthName(nr)`, która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim.

// Dla przykładu:
//     monthName(10) -> "październik"

function monthName(nr) {
    let newNumber = "";
    if(nr !== Number) {
        newNumber = parseInt(nr, 10);
    }
    switch (newNumber){
        case 1:
            return "styczeń";
        case 2:
            return "luty";
        case 3:
            return "marzec";

        case 4:
            return "kwiecień";
        case 5:
            return "maj";
        case 6:
            return "czerwiec";

        case 7:
            return "lipiec";
        case 8:
            return "sierpień";
        case 9:
            return "wrzesień";

        case 10:
            return "październik";
        case 11:
            return "listopad";
        case 12:
            return "grudzień";
        default:
            return "Podaj liczbę nr miesiąca z przedziału 1-12"
    }

}

console.log(monthName(13));