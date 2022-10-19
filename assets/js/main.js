


// Visualizzare in pagina 5 numeri casuali.
    //Utilizziamo Math.random per creare i numeri
        // Inseriamo Math.random all'interno di funzione
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
for (let i = 1; i <= 5; i++) {
    const randomNumber = generateRandomNumber(1, 100);
    console.log(randomNumber);
    
}

// stampiamo in pagina i numeri 
    // Selezioniamo un elemento dalla dom (ul)
        // Utilizziamo il querySelctor
const ulElement = document.querySelector(`ul`);

    // creiamo una costante con l' elemento da stampare 
        // Con al suo interno i nuemri random generati

const printRandomNumberEl = `<li>${i}</li>`

    // Infine utilizziamo insert per stamparla a schermo
ulElement.insertAdjacentHTML(`beforeend`,printRandomNumberEl);








//  Da lì parte un timer di 30 secondi. 
//  Dopo 30 secondi i numeri scompaiono 
// l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.