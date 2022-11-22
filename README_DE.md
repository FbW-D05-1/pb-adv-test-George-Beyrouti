# Advanced Test - Grundlagen der Programmierung


## Aufgabe 1 - Schlüssel-Wert-Paare
* Erstelle ein Objekt namens `profileData`, das einen Benutzer repräsentiert.
* Das Objekt sollte 4 Schlüssel haben: `firstName` (Vorname), `lastName` (Nachname), `age` (Alter) und `city` (Stadt).
* Verwende für jeden Schlüssel einen Wert Deiner Wahl.

## Aufgabe 2 - Objektmethode
* Füge dem Objekt `profileData` eine neue Eigenschaft namens `details` hinzu. Diese Eigenschaft ist eine Methode, die einen String zurückgibt, der den Benutzer beschreibt. Siehe das folgende Beispiel:

    ```javascript
    console.log(profileData.details());
    ```

    **Erwartete Ausgabe**:
    ```plaintext
    Jess Smith is 30 years old and lives in Berlin
    ```

## Aufgabe 3 - Wortkonverter
* Erstelle eine Funktion namens `wordConverter`.
* Die Funktion hat zwei Parameter:
   * `words`: ein Array von Wörtern
   * `suffix`: ein String
* Verwende innerhalb der Funktion eine Array-Methode, um das `suffix` an das Ende aller Wörter im Array anzuhängen.
* **Wichtig**: Verwende **nicht** eine "for"-Schleife, um diese Aufgabe zu erledigen.
* Schau dir die erwartete Ausgabe unten an.

    **Beispiel**
    ```javascript
    let adjectives = ["smart", "kind", "sweet", "small", "clear"];
    ```
    Rufe Deine Funktion auf und gib den zurückgegebenen Wert auf der Konsole aus.

    **Erwartete Ausgabe**
    ```javascript
    > console.log(wordConverter(adjectives, "er"));
    [ 'smarter', 'kinder', 'sweeter', 'smaller', 'clearer' ]
    ```
## Aufgabe 4 - Stundenberechnung
* Erstelle eine Funktion namens `calculateHours`
* Die Funktion hat einen Parameter:
    * `hours`: Ein Array von Objekten, die `day`, `start` und `end` beinhalten. Sie beschreiben die Arbeitsstunden einer einzelnen Person (siehe Beispiel unten)
* Die Funktion berechnet und gibt zurück, wie viele Stunden (insgesamt) diese Person in der Woche gearbeitet hat, basierend auf dem Objekt im angegebenen Array
* **Anmerkung**: Wir gehen davon aus, dass der Beginn immer am Morgen und das Ende immer am Nachmittag ist. (Es sind keine Nachtschichten zu erwarten)

    **Beispiel Array der Arbeitsstunden**
    ```javascript
    const hourTracking = [
        { day: 'Monday', start: 8, end: 17},
        { day: 'Tuesday', start: 9, end: 15},
        { day: 'Wednesday', start: 10, end: 18},
        { day: 'Thursday', start: 7, end: 14},
        { day: 'Friday', start: 6, end: 12},
    ];
    ```
    Rufe Deine Funktion auf und gib den Rückgabewert auf der Konsole aus.

    **Erwartete Ausgabe**
    ```javascript
    > console.log(calculateHours(hourTracking));
    36
    ```

## Aufgabe 5 - Klassen
* Erstelle eine Klasse namens "Course", um einen Kurs bei DCI zu repräsentieren.
* Füge einen Konstruktor (engl. constructor) hinzu, um die Eigenschaften in der angegebenen Reihenfolge zu initialisieren.
* Eigenschaften der Klasse:
    * `teacher`: ein String mit dem Namen des Lehrers
    * `type`: ein String, der den Typ des Kurses angibt. Zum Beispiel: `"web development"`.
    * `number`: Anzahl der Schüler im Kurs
* Klassenmethoden:
    * `spaceNeeded()`: berechnet, wie groß ein Klassenraum sein sollte, abhängig von der Anzahl der Schüler, die den Kurs belegen, und gibt diesen Wert zurück. Nimm an, dass für jeden Schüler `2m²` benötigt werden.
      * Zum Beispiel:
         * für eine Klasse mit 10 Schülern wäre der Rückgabewert `20`.
         * für eine Klasse mit 25 Schülern wäre der Rückgabewert `50`.
    * `details()`: gibt einen String zurück, der den Kurs beschreibt, zum Beispiel: `"This is a web development course taught by John Smith. There are 10 students taking the course."`
        * Füge den "teacher", den "type" und die "number" aus den Eigenschaften Deiner Klasse ein.

* Erstelle eine Instanz Deiner Klasse und teste die verschiedenen Methoden, indem Du ihr Ergebnis auf der Konsole ausgibst.

    **Beispiel für einen Web-Development Kurs, mit 22 Schülern und John als Lehrer:**
    ```plaintext
    > console.log(course.spaceNeeded());
    44

    > console.log(course.details());
    This is a web development course taught by John. There are 22 students taking the course.
    ```

## Aufgabe 6 - Eingabevalidierung
* Eine PIN ist eine **P**ersonal **I**dentification **N**umber (wie Du sie von Bankkarten und zum Entsperren Deines Handys kennst)
* Erstelle die Funktion `validPin`.
* Die Funktion sollte `true` oder `false` zurückgeben, wenn die PIN alle untenstehenden Anforderungen erfüllt oder nicht:

    **Voraussetzungen**:
    * Der Pin-Code darf nur aus numerischen Ziffern bestehen.
    * Der PIN-Code muss 4 Ziffern lang sein
    * Die letzte Ziffer des Pincodes muss gerade sein (0, 2, 4, 6, 8)
    * Die erste Ziffer des Pincodes muss sich von der letzten unterscheiden

* Die Funktion sollte zurückgeben:
   * `true`: wenn der PIN-Code alle Anforderungen erfüllt
   * `false`: wenn auch nur eine einzige Bedingung nicht erfüllt ist

* Rufe Deine Funktion mit einigen Beispielen auf und gib die Rückgabewerte auf der Konsole aus.

    **Beispiele**
    ```javascript
    > console.log(validPin("1234"));
    true
    > console.log(validPin("1235"));// last number should be even
    false 
    > console.log(validPin("12ww"));// should only consist of numbers
    false 
    > console.log(validPin("12345"));// should be 4 digits, not 5
    false 
    > console.log(validPin("2222"));// first and last digits should be different
    false 
    > console.log(validPin("2224"));
    true 
    ```
