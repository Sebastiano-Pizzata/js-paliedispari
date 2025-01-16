// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// parola Palidroma

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






