// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


// Parola palindroma





function checkPalidroma(parola){
     let len = parola.length;

    for(let i = 0; i < len / 2; i++ ){ 
        if (parola[i] !== parola[len - 1 - i]) {  
        return 'non è un parola palidroma';  
    }                 
} 
      return 'è una parola palidroma'; 

}

let parolaUtente = prompt("inserisci una parola, possibilmente palidroma : ");

let palidroma = checkPalidroma(parolaUtente)

alert(palidroma)






