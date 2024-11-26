
let numeriRandom = [];


//Btn play selezionato. Si attiva al click
document.getElementById("play").addEventListener("click", function(){
document.getElementById("play").classList.add("d-none")
document.getElementById("conferma").classList.remove("d-none")


for (let i = 0; i < 5; i++){
    numeriRandom.push(Math.floor(Math.random() * 60) + 1)
    }

const numeriRandomMostrati = `
    <p> ${numeriRandom[0]} </p>
    <p> ${numeriRandom[1]} </p>
    <p> ${numeriRandom[2]} </p>
    <p> ${numeriRandom[3]} </p>
    <p> ${numeriRandom[4]} </p>
`

document.getElementById("numeri").innerHTML= numeriRandomMostrati

event.preventDefault();


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
  }
}, 1000); 

})

document.getElementById("conferma").addEventListener("click", function(){
event.preventDefault();

for (let ctr = 0; ctr < 5; ctr++) {

}



})







/* 
Tasto play per iniziare il conto alla rovescia (OK)
Generazione di numeri random, comparsa in pagina e inserimento all'interno di array (OK)
Alla fine del conto alla rovescia i numeri random comparsi spariscono
Check if numeroInseritiDalPlayer === numeriRandomGenerati al momento del click del tasto conferma
    Se sono uguali (mex di successo)
    Se non sono uguali (mex di errore)



*/
