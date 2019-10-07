![](../../../kursjs.png)

# KursJS - obiekty

## Zadanie 1
Stwórz obiekt o nazwie **tableGenerator**.
Obiekt ten powinien mieć tylko metody:

1. **randomNumber(min, max)**

    zwraca losową liczbę z przedziału `min`-`max`

2. **generateIncTable(lng)**

    zwraca nową tablicę o długości `lng` z liczbami od 0 do lng

3. **generateRandomTable(lng, min, max)**

    zwraca nową tablice o długości `lng` z losowymi liczbami z przedziału `min`-`max`

4. **generateTableFromText(str)**

    generuje nową tablicę ze słowami z tekstu `str`
    Jeżeli przekazany tekst nie jest tekstem, wtedy powinna być zwrócona pusta tablica
    Wykorzystaj odpowiednią metodę dla stringów (szukaj na "mdn js string")

5. **getMaxFromTable(arr)**

    zwraca największą liczbę z tablicy `arr`

6. **getMinFromTable(arr)**

    zwraca najmniejszą liczbę z tablicy `arr`

7. **delete(arr, index)**
    usuwa z tablicy `arr` element o indexie `index`