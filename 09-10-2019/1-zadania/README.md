![](../../../kursjs.png)

# KursJS - obiekty - zaawansowany this

## Zadanie 1
Stwórz obiekt który ma:
- właściwość **time** - czas ok 1000
- właściwość **pets**, która zawiera tablicę kilku zwierzaków
- metodę **print()** - która po czasie `time` zrobi pętlę po tablicy pets i wypisze z osobna każde zwierzątko dużymi literami

## Zadanie 2
Mamy obiekt:

```
const ob = {
    name : "Kwiatek",

    init() {
        console.log("Nazywam się " + this.name);

        function showText() {
            console.log("Nazywam się " + this.name);
        }

        showText();
    }
}

ob.init();
```

Czy potrafisz wyjaśnić działanie powyższego kodu?
