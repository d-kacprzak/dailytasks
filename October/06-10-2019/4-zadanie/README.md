![](../../../kursjs.png)

# KursJS - obiekty
Stwórz prosty obiekt **spaceShip**, który będzie miał:

## Właściwości:
- **name** ustawioną na Enterprise
- **currentLocation** ustawioną na Earth
- **flyDistance** ustawione na 0

## Metody:
- **flyTo(place, distance)** która ustawi obiektowi właściwość `currentLocation` na odpowiednie miejsce podane w parametrze `place` oraz doliczy przebyty dystans do `flyDistance`.

- Metodę **showInfo()** która wypisze w konsoli tekst:

    ```
    Informacje o statku:
    --------------------
    Statek Enterprise lecący z szybkością ....
    doleciał do miejsca .....
    Statek przeleciał już całkowity dystans ....
    ```

- Metodę **meetClingon()** która wykona 100 losowań 0-1. Jeżeli minimum połowa będzie pozytywna (większa niż połowa), wtedy powinna wypisać w konsoli:

    ```Statek .... będący w okolicy .... zwycięsko wyszedł ze spotkania z Klingonami```

    jeżeli jednak mniej niż połowa będzie pozytywna, powinien pojawić się żółty tekst w konsoli (console.alert)

    ```Statek .... będący w okolicy .... został pokonany przez Klingonów```