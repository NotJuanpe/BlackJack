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
            fichas = 0;
            alert("Apostaste todas tus fichas");
        }else{
            fichas = fichas - apuesta;
            alert(`Tu apuesta es de ${apuesta} \nTe quedan ${fichas} fichas`);
        }

        let apuesta_finalizada = blackjack(apuesta);
        fichas = fichas + parseInt(apuesta_finalizada);

        alert(`Tus fichas ahora son ${fichas}`)
        

        if((prompt("Seguimos una mano mas?").toLowerCase() == "no")){
            jugar = false;
        }

        if(fichas <= 0){
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
  
function blackjack(apuesta){

    let jugador = parseInt(numeros(4,10));
    let dealer = parseInt(numeros(7,10));

    jugador = jugador + parseInt(numeros(1,10));

    alert(`${nombreDeJugador} : ${jugador} \nDealer: ${dealer}`);

    if(prompt("Pedis carta").toLowerCase() == "si"){
        jugador = jugador + parseInt(numeros(1,10));
        alert(`${nombreDeJugador} : ${jugador} \nDealer: ${dealer}`);
    }

    if(jugador > 21){
        apuesta = 0;
        alert('Perdistes')
        return 0;
    }

    dealer = dealer + parseInt(numeros(1,10));
    alert(`${nombreDeJugador} : ${jugador} \nDealer: ${dealer}`);

    if(dealer < jugador){
        alert(`Ganaste ${apuesta*2}`)
        return apuesta*2;
    }else{
        alert('Perdiste')
        return 0;
    }

    
}