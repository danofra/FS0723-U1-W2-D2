/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numy = 1
const numz = 5
if (numy>numz){
  console.log("il numero " + numy + " è più grande del " + numz)
}
else{
  console.log("il numero " + numy + " è più piccolo del " + numz)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numx = 5
if (numx !== 5) 
{
console.log("Il numero "+ numx + " è diverso da 5")
}
else 
{
console.log ("il numero " + numx + " è uguale a 5")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numA = 50
if( numA % 5 === 0) 
{
console.log("Il numero " + numA + " è divisibile per 5")
}
else
{  
  console.log("Non è divisibile") 
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 8
const num2 = 0
if (num1 === 8 || num2 === 8 || num1 - num2 === 8 || num1 + num2 === 8)
console.log("condizione corretta")
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 55
if (totalShoppingCart>50) {
console.log(" La spedizione è pari a " + (totalShoppingCart+10) + (" €"))
}
else{
console.log("Non hai diritto alla spedizione agevolata")
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFriday = false
if (blackFriday === true) 
{
console.log(" La spedizione è gratuita e pagherai " + (totalShoppingCart - 20*totalShoppingCart/100) + (" €"))
}
else 
{
console.log("Non hai diritto alla spedizione agevolata, pagherai "  + (totalShoppingCart) + (" €"))
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 25;
let y = 10;
let z = 15;

if (x >= y && x >= z) {
  if (y >= z) {
    console.log(x, y, z);
  } else {
    console.log(x, z, y);
  }
} else if (y >= x && y >= z) {
  if (a >= c) {
    console.log(y, x, z);
  } else {
    console.log(y, z, x);
  }
} else {
  if (x >= y) {
    console.log(z, x, y);
  } else {
    console.log(z, y, z);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const name = '10'
const number = 10
console.log(typeof name)
console.log(typeof number)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num8 = 51
if (num8 % 2 === 0) {
  console.log("pari")
}
else {
  console.log("dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
  let val = 11
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'toronto'
console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Non accorcia l'array
// delete me.skills[me.skills.length-1]
// Accorcia l'array
delete me.skills.pop()
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arrayNumber = []
console.log(arrayNumber)
arrayNumber.push(1,2,3,4,5,6,7,8,9,10)
console.log(arrayNumber)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arrayNumber[arrayNumber.length - 1] = 100
console.log(arrayNumber)