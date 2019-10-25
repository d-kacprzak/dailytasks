![](../../kursjs.png)

## Zadanie 1
Zamień na funkcje strzałkową poniższe funkcje (ale też użyj nowszego zapisu tam gdzie się da):

```
const sum = function(a, b) {
    const result = a + b;
    console.log(result);
}

const myPow = function(a) {
    return Math.pow(a);
}

const hr = function() {
    console.log("-------");
}

const bigWords = function(tab) {
    const result = [];
    for (let i=0; i<tab.length; i++) {
        result.push(tab[i].toUpperCase());
    }
    return result;
}

const sumTab = function(tab)  {
    const sum = 0;
    for (let i=0; i<tab.length; i++) {
        sum += tab[i];
    }
    return sum;
}

function test() {
    return "abecadło z pieca spadło";
}

(function() {
    console.log("Prawie koniec");
});

function findFirst(arr, name) {
    let math = undefined;
    for (var i=0; i<arr.length; i++) {
        if (arr[i].name === name) {
            math = arr[i];
            break;
        }
    }
    return math;
}
```

## Zadanie 2
Mamy kod:
```
const ob = {
    counter : 0,
    showText: function() {
        setInterval(function() {
            counter++;
            const tekst = "Dzisiaj zjadłem " + this.counter + " placków!";
            console.log(tekst);
        }, 500)
    }
}

ob.showText();
```
Popraw go tak, by działał. Dodatkowo użyj jak najwięcej nowych zapisów.

## Zadanie 3
Stwórz obiekt ob, która będzie miała:
- właściwość **favoriteColors**, która będzie tablicą z przykładowymi kolorami: `#30A9DE`, `#F6B352`, `#56A902`, `#f9320c`, `#181842`
- metodę **bind()**, w której pobierzesz ze strony przycisk oraz podepniesz mu kliknięcie.

Po kliknięciu w przycisk stwórz w pętli nowe divy. Każdy div powinien mieć:
- wymiary 100 x 100
- klasę .element
- kolor tekstu biały
- tło pobrane z tablicy `favouriteColors`
- tekst, który będzie nazwą koloru z tablicy `favoriteColors`

Stworzone divy wstaw na stronę do elementu .container