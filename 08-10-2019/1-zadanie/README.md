![](../../../kursjs.png)

# KursJS - obiekty

## Zadanie 1
Stwórz obiekt o nazwie **text**.
Obiekt ten powinien mieć metody:

- **check(txt, word)**

    która zwraca true/false jeżeli w tekście `txt` znajduje się szukane słowo `word`

    ```
    check("ala ma kota", "kota")
    ---> true
    ```

- **getCountText(txt)**

    Zwraca liczbę liter w tekście `txt`. Uwaga znaki interpunkcyjne też traktujmy jako litery

    ```
    getCount("ala ma kota")
    ---> 11
    ```

- **getWordsCount(txt)**

    zwraca liczbę słów w przekazanym tekście

    ```
    getWordsCount("Ala ma kota")
    ---> 3
    ```

- **setCapitalize(txt)**

    zwraca nowy tekst tak zamieniony, że każde słowo zaczyna się z dużej litery

    ```
    setCapitalize("ala ma kota")
    ---> "Ala Ma Kota"
    ```

- **setMix(txt)**

    zwraca nowy tekst z naprzemiennie dużymi/małymi literami. Spację i znaki interpunkcyjne traktujemy jako litery.

    ```
    setMix("ala ma kota")
    ---> "aLa mA KoTa"
    ```

- **generateRandom(lng)**

    Generuje tekst o długości lng który składa się z losowych liter

    ```
    generateRandom(10)
    ---> "dkjiuhtjox"
    ```