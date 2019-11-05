![](../../../kursjs.png)

# KursJS - obiekty
Stwórz obiekt **book**, który będzie miał:

#### Właściwości:
- **users**
    która będzie tablicą użytkowników (na początku pusta)

#### Metody:
- **addUser(name, age, phone)**

    która doda to tablicy `users` nowy obiekt, który będzie miał klucze:
    name, age, phone z przekazanymi do tej funkcji danymi

- **showUsers()**

    która po odpaleniu wypisze w konsoli tekst:
    `Wszyscy użytkownicy w książce` a następnie w pętli wypisze wszystkich użytkowników

- **findByName(name)**

    która wypisze w konsoli pierwszego użytkownika, który ma szukane imię
    lub false jeżeli nie znajdzie.

- **findByPhone(phone)**

    która wypisze w konsoli pierwszego użytkownika, który ma szukany telefon
    lub false jeżeli nie znajdzie

- **getCount()**

    która wypisze ile jest użytkowników w tabeli