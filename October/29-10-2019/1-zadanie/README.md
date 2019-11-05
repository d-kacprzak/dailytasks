![](../../kursjs.png)

# KursJS - class

## Zadanie 1
Stwórz klasę Brick, która będzie opisywać pojedynczy klocek w Arkanoid.

Niech ma:
- właściwości `x`, `y`
- właściwość `graphic`
- właściwości `width`, `height`
- właściwość `type`
- właściwość `live`
- metodę `print`, która wypisze powyższe detale.
- metodę `init`, która wypisze w konsoli "Dodano na planszę"


## Zadanie 2
Stwórz klasy dziedziczące `BrickRed`, `BrickBlue`, `BrickGreen`, które będą dziedziczyć po klasie Brick.

Klasy powinny mieć:

BrickBlue powinien mieć:
- graphic ustawiony na "blue.png"
- live ustawione na 10

BrickRed powinien mieć:
- graphic ustawiony na "red.png"
- live ustawione na 15

BrickGreen powinien mieć:
- graphic ustawiony na "green.png"
- live ustawione na 20


## Zadanie 3
Stwórz klasę BrickAnim, która będzie dziedziczyć po klasie Brick.
Klasa ta powinna mieć metodę moveHorizontal, która będzie wypisywać w konsoli
`poruszam się poziomo z szybkością ...`.
W miejsce kropek wstaw właściwość speed, którą będzie miała ta klasa.

Stwórz kilka obiektów na bazie powyższych klas. Zainicjuj im metody init() i print().