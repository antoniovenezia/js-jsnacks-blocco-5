//Snack 3 - 1^ parte.
//Creare un array con tre numeri, calcolare la media di questi tre numeri.

var array = [1, 2, 3];
var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum += array[i];
}

media = sum / array.length;
console.log("La somma dei numeri è: ", sum);
console.log("La media dei numeri è: ", media);



//Snack 3 - 2^ parte.
//Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
//nome
//cognome
//anno
//punteggio
//Calcolare il punteggio medio dei tre giocatori.

var team = [
    {
        name: "Antonio",
        surname: "Venezia",
        age: 21,
        score: 10
    },
    {
        name: "Daniele",
        surname: "Guadagno",
        age: 19,
        score: 25
    },
    {
        name: "Andrea",
        surname: "Ditaranto",
        age: 34,
        score: 20
    }
]

console.log(team);

var sum2 = 0;
/*
for (var k in team) {
    sum2 += team[k].score;
}
*/
for(var x = 0; x < team.length; x++) {
    sum2 += team[x].score;
}
console.log("La somma dei punteggi dei giocatori è: ", sum2);

media2 = sum2 / team.length;
console.log("Il punteggio medio dei giocatori è: ", Math.floor(media2).toFixed(2));

