/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare,
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano",
*/


//stampo numeri da 1 a 100 [uso "for"]

//usando if impongo la condizione che sia stampato fizz per i numeri che / 3 non danno resto

//usando else if impongo la condizione che sia stampato buzz per i numeri che / 5 non danno resto

//uso operatore logico "and" per eseguire quando entrambe sono vere

//output finale

//considerazioni: per far funzionare il programma la prima condizione da considerare é che entrambe le condioni devono essere vere!!

/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {    <-------ERRORE questa é la prima condizione che deve essere verificata affinché le altre due siano vere singolarmente
        console.log("BuzzFizz");
    } else console.log(i)
}
*/

for (let i = 1; i <= 100; i++) {//eseguo ciclo che stampi i valori da 1 a 100

    if (i % 3 === 0 && i % 5 === 0) {//impongo che quando la condizione divisibile per 3 e divisibile per 5 sono vere assieme venga stampato FizzBuzz
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {//impongo che SOLO quando la condizione divisibile per 3 é vera sia stampato Fizz 
        console.log("Fizz");

    } else if (i % 5 === 0) {//impongo che SOLO quando la condizione divisibile per 5 é vera sia stampato Buzz
        console.log("Buzz");

    } else console.log(i)//quando nessuna delle precedenti condizioni é vera viene stampato il valore indice
}







