![](../../kursjs.png)

# KursJS - template strings

## Zadanie 1
Napisz funkcję `randomTable(lng, min, max)`, która przyjmie 3 parametry: długość tablicy, minimalna liczba, maksymalna liczba.
Funkcja powinna zwrócić tablicę o długości lng, zawierającą losowe liczby absolutne z przedziału min-max. Domyślnie długość tablicy powinna wynosić 5, min 0, a max 10.

Za pomocą powyższej funkcji stwórz 2 tablice.
Za pomocą spread operatora połącz je w jedną tablicę i wypisz ją w konsoli.

Następnie pobierz z tej tablicy największą i najmniejszą liczbę i wypisz je w konsoli.

## Zadanie 2
Stwórz funkcję `printBig()`, która będzie przyjmowała dowolną liczbę parametrów (załóżmy, że są to słowa).

Wypisz w konsoli pojedynczy tekst, który będzie składał się z przekazanych wartości pisanych dużymi literami i rozdzielonych spacją:

```
wywołanie: printBig("pies", "świnka", "kot");
wynik: "PIES ŚWINKA KOT"
```

## Zadanie 3
Napisz funkcję `avg()`, która wymagać będzie dowolnej liczby atrybutów - liczb.
Funkcja powinna zwrócić średnią z przekazanych liczb.

## Zadanie 4
Mamy dwie funkcje: `first()` i `second()`.

Funkcja second() powinna w konsoli wypisywać kolejno wszystkie atrybuty, które zostały do niej przekazane.

Do funkcji first() powinniśmy móc przekazać dowolną liczbę atrybutów.
Funkcja powinna wypisać w konsoli napis "Witam serdecznie", po czym powinna odpalić funkcję second() z tymi samymi wartościami, jakie zostały przekazane do funkcji first()
