// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.




let numeroUtente = prompt("scegli fra pari o dispari")

console.log(`l'utente ha scelto : ${numeroUtente}`);

let numeroUtente2 = parseInt(prompt("scegli un numero da 1 a 5"))

console.log(`l'utente ha scelto : ${numeroUtente2}`);


function numeroCasuale(min, max){
    let random = Math.floor(Math.random()* max) + min;
    return random
}

let randomNumbers = numeroCasuale(1, 5)

console.log(randomNumbers)

let somma = randomNumbers + numeroUtente2;


console.log(`la somma dei due numeri è : ${somma} `)




