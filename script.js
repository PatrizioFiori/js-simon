
let arrayNumeriRandom = []

//mi rompe le scatole che ENTER possa ricaricare il gioco
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        alert("Tasto Invio disabilitato!");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "r") {
        alert("Retry");
        location.reload();
    }
});



//evento che al click di play fa partire il gioco generando i numeri randomicamente e startando il timer
document.getElementById("play").addEventListener("click", function(){
    event.preventDefault(); 
    document.getElementById("play").classList.add("d-none")
    document.getElementById("conferma").classList.remove("d-none")

    for (let i = 0; i < 5; i++) {
        let numeroGenerato;
        
        do { //genera numeri fintanto che il numero generato non sia univoco nell'array
            numeroGenerato = Math.floor(Math.random() * 50) + 1;
            
        } while (arrayNumeriRandom.includes(numeroGenerato));
        
        arrayNumeriRandom.push(numeroGenerato);
    }
    
    console.log(arrayNumeriRandom);
    
    const numeriRandomMostratiSuSchermo = `
    <p> ${arrayNumeriRandom[0]} </p>
    <p> ${arrayNumeriRandom[1]} </p>
    <p> ${arrayNumeriRandom[2]} </p>
    <p> ${arrayNumeriRandom[3]} </p>
    <p> ${arrayNumeriRandom[4]} </p>
    `

    document.getElementById("numeri").innerHTML= numeriRandomMostratiSuSchermo

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
        
        inputs.forEach(input => { // DA APPROFONDIRE IL FUNZIONAMENTO ( inputs.forEach SUGGERITO DA IA)
            input.disabled = false; // Rimuove l'attributo disabled
        });
        
      }
    }, 1000); 

})



//evento che al click di conferma checka se i numeri corrispondono
document.getElementById("conferma").addEventListener("click", function (){
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
    

        //QUESTA PARTE NON MI PIACE. DA RISISTEMARE !
        let success = true; 

        if (numeriInseriti.length === arrayNumeriRandom.length) {
            for (let i = 0; i < numeriInseriti.length; i++) {
                if (numeriInseriti[i] !== arrayNumeriRandom[i]) {
                    success = false; 
                    break; 
                }
            }
        } else {
            success = false; 
        }

        if (success) {
            document.getElementById("messaggio").classList.remove("d-none")
            document.getElementById("messaggio").classList.add("text-success");
            document.getElementById("messaggio").innerHTML = `Bravo! I numeri erano ${arrayNumeriRandom}`;
        } else {
            document.getElementById("messaggio").classList.remove("d-none")
            document.getElementById("messaggio").classList.add("text-danger");
            document.getElementById("messaggio").innerHTML = `Cretino! I numeri erano ${arrayNumeriRandom}`;
        }
    
        ricaricoPagina(); // Ricarica la pagina
    
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
