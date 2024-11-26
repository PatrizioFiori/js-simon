
let arrayNumeriRandom = []


//evento che al click di play fa partire il gioco generando i numeri randomicamente e startando il timer
document.getElementById("play").addEventListener("click", function(){
    event.preventDefault();
    document.getElementById("play").classList.add("d-none")
    document.getElementById("conferma").classList.remove("d-none")

    let arrayNumeriRandom = [];

    for (let i = 0; i < 5; i++) {
        let numeroGenerato;
        
        do {
            numeroGenerato = Math.floor(Math.random() * 50) + 1;
            
        } while (arrayNumeriRandom.includes(numeroGenerato));
        
        arrayNumeriRandom.push(numeroGenerato);
    }
    
    console.log(arrayNumeriRandom);
    
    const numeriRandomMostrati = `
    <p> ${arrayNumeriRandom[0]} </p>
    <p> ${arrayNumeriRandom[1]} </p>
    <p> ${arrayNumeriRandom[2]} </p>
    <p> ${arrayNumeriRandom[3]} </p>
    <p> ${arrayNumeriRandom[4]} </p>
    `

    document.getElementById("numeri").innerHTML= numeriRandomMostrati

    let seconds = 2; 
    const countdown = document.getElementById('timer');
    document.getElementById("timer").innerHTML = seconds
    
    const intervalId = setInterval(() => {
      seconds--; 
      document.getElementById("timer").innerHTML = seconds
    
      if (seconds <= 0) {
        clearInterval(intervalId); 
        document.getElementById("timer").innerHTML = "Inserisci i numeri !"
        document.getElementById("numeri").innerHTML= "";
        
        const inputs = document.querySelectorAll("#boxRisposta input");
        
        inputs.forEach(input => {
            input.disabled = false; // Rimuove l'attributo disabled
        });
        
      }
    }, 1000); 

})



//evento che al click di conferma checka se i numeri corrispondono
document.getElementById("conferma").addEventListener("click", function(){
    event.preventDefault();
    const inputs = document.querySelectorAll("#boxRisposta input"); // Seleziona tutti gli input nel div
    const numeriInseriti = []


        // Controllo dei duplicati nei numeri inseriti
        let duplicati = false;
    
        for (let i = 0; i < inputs.length; i++) {
            const valoreInput = inputs[i].value.trim();
            const numeroInput = parseInt(valoreInput);
    
            if (numeriInseriti.includes(numeroInput)) {
                duplicati = true;
                break;
            } else {
                numeriInseriti.push(numeroInput);
            }
        }
        if (duplicati) {
            alert("Hai inserito numeri duplicati. Per favore, inserisci numeri unici.");
            return;
        }
    


        for (let ctr = 0; ctr < 5; ctr++) {
            const valoreInput = document.querySelectorAll("#boxRisposta input")[ctr].value;
            const numeroInput = parseInt(valoreInput);
            
            if(arrayNumeriRandom.includes(numeroInput)){
                console.log(`Bravo! I numeri erano ${arrayNumeriRandom}`);
                ricaricoPagina();  // Puoi gestire questa funzione come vuoi
            } else {
                console.log(`Scemo! I numeri erano ${arrayNumeriRandom}`);
                ricaricoPagina();  // Puoi gestire questa funzione come vuoi
            }
        }
        

    
})



//function per ricaricare la pagina
function ricaricoPagina() {
let seconds = 5; 
const countdown = document.getElementById('timer');
document.getElementById("timer").innerHTML = seconds + " <br> Sto ricaricando la pagina"; // Mostra il countdown iniziale

const intervalId = setInterval(() => {
    seconds--; 
    document.getElementById("timer").innerHTML = seconds + " <br> Sto ricaricando la pagina"; // Aggiorna il timer

    if (seconds <= 0) {
        clearInterval(intervalId); 
        location.reload(); // Ricarica la pagina
    }
}, 1000); 
}
