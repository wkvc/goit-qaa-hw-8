// Zadanie 1

// plik user.json
// 1. Pary klucz-wartość w pliku JSON:
// "name": "Josh"
// "weight": 175
// "age": 30
// "eyecolor": "brown"
// "isHappy": true
// "cars": ["Chevy", "Honda"]
// "favoriteBook": obiekt zagnieżdżony {}

// Typy danych każdej wartości w obiekcie JSON:
// "name": string
// "weight": number
// "age": number
// "eyecolor": string
// "isHappy": boolean
// "cars": array
// "favoriteBook": object

// Wyjaśnienie struktury JSON:
// JSON jest lekkim formatem wymiany danych, który jest powszechnie używany do przesyłania danych między serwerem a klientem.
// W tym pliku JSON mamy obiekt reprezentujący osobę o imieniu Josh.
// Obiekt ten ma różne właściwości, takie jak "name", "weight", "age", "eyecolor", "isHappy", "cars" i "favoriteBook".
// Wartości tych właściwości mogą być różnych typów danych: stringi, liczby, booleany, tablice i obiekty.
// Obiekt "favoriteBook" zawiera kolejny zagnieżdżony obiekt, reprezentujący ulubioną książkę osoby Josh.
// Dzięki strukturze JSON możliwe jest przechowywanie i przekazywanie różnych typów danych w sposób czytelny dla maszyny oraz dla człowieka.


//Zadanie 2

const json = '{"name":"Mango","age":3,"isHappy":true}';
const obj = JSON.parse(json);
console.log(obj);

//Zadanie 3

const invalidJson = '{"name":"Mango","age":3,"isHappy":true}}';
try {
    const obj1 = JSON.parse(invalidJson);
    console.log(obj1);
} catch (error) {
    console.error("name:", error.name);
    console.error("Message:", error.message);
}
console.log("Kod działa pomimo wystąpienia błędu")