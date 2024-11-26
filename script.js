
let numeriRandom = [];


//Btn play selezionato. Si attiva al click
document.getElementById("play").addEventListener("click", function(){
document.getElementById("play").classList.add("d-none")

for (let i = 0; i < 5; i++){
    numeriRandom.push(Math.floor(Math.random() * 60) + 1)
    }
    console.log(numeriRandom);


const numeriRandomMostrati = `
    <p> ${numeriRandom[0]} </p>
    <p> ${numeriRandom[1]} </p>
    <p> ${numeriRandom[2]} </p>
    <p> ${numeriRandom[3]} </p>
    <p> ${numeriRandom[4]} </p>
`

document.getElementById("numeri").innerHTML= numeriRandomMostrati
    
event.preventDefault();


setInterval(() => {
    
}, 10000);

})



/* 
Tasto play per iniziare il conto alla rovescia (OK)
Generazione di numeri random, comparsa in pagina e inserimento all'interno di array (OK)
Alla fine del conto alla rovescia i numeri random comparsi spariscono
Check if numeroInseritiDalPlayer === numeriRandomGenerati al momento del click del tasto conferma
    Se sono uguali (mex di successo)
    Se non sono uguali (mex di errore)



*/
