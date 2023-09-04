/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

Ci sono diversi datatype che le variabili di Javascript possono avere:

1)Number: questa tipologia di variabile indica un numero (intero: 4, decimale: 4.05, negativo: -4) al quale si possono applicare operazioni aritmetiche
*/
let numeroIntero = 4;
let numeroDecimale = 4.05;
let numeroNegativo = -4;

console.log(numeroDecimale + numeroIntero - numeroNegativo); //risultato = 12.05

/*
2) String: variabile stringa è una frase o una sequenza di caratteri delimitata da virgolette ("", '', ...) 
*/
let stringaNumerica = "5";
let stringaTestuale = "Cinque";
console.log(stringaNumerica + " " + stringaTestuale);

/*
3) Boolean value: valore booleano significa vero o falso.. */
let vero = true;
let falso = false;
console.log(vero === falso); //false

//4) Undefined: quando una variabile viene dichiarata ma non gli viene ancora assegnato un valore.
let a = undefined;
const b = undefined;
console.log(b);

//5) Null: una variabile null è una variabile vuota, che non contiene nessun valore.

const c = null;
let d = null;

//6) Objects:

//7)Symbol

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Carlo";

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
const e = 12 + 20;
console.log(e);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* 
name = Vitetta;
console.log(name); 
in console avremo un errore poichè alla variabile name è già stato assegnato un valore, ed essendo una variabile const e non let tale valore non può essere sovrascritto
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let y = 4 - x;
console.log(y);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log("nome1=nome2?", name1 === name2); //false
console.log("nome1NON=nome2?", !(name1 === name2)); //true
console.log("nome1!=nome2?", name1 != name2);
let name3 = name2.toLowerCase();
console.log("nome1=nome3?", name1 === name3);
