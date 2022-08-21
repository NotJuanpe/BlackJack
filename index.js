let nombreDeJugador = prompt("Ingrese su nombre");

if(prompt(`Hola ${nombreDeJugador} venis a jugar Blackjack?`).toLowerCase() == "si"){
    alert(`${nombreDeJugador} como veo que no tenes fichas te voy a regalar 10!`);
    let fichas = 10;
    
    if(prompt("Sabes jugar al Black").toLowerCase() == "no"){

        alert("Es muy simple el objetivo es juntar mas puntos que yo en tu mano siendo el numero mayor el 21, puedes pedir carta o plantarte");

    }

    alert("Ahora si vamos a jugar");

    let jugar = true;

    while(jugar && (fichas > 0)){

        apuesta = prompt("Cuantas fichas queres apostar");

        if( apuesta > fichas){
            apuesta = fichas;
            alert("Apostaste todas tus fichas");
        }else{
            alert(`Tu apuesta es de ${apuesta}`);
        }



        if(prompt("Seguimos una mano mas?").toLowerCase() == "no"){
            jugar = false;
        }

        if(fichas > 0){
            alert("Te quedaste sin fichas")
        }

    };

}
else{
    alert(`Una lastima, adios`);
}

alert("Hasta la proxima")

function numeros(min, max) {
    return Math.random() * (max - min) + min;
  }
  
function blackjack(apuest){

}