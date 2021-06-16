//Snack 4 - 
/*
Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
-nome
-cognome
-age
-descrizione

Per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

{
  nome: 'Pippo',
  cognome: 'Baudo',
  age: 80,
  descrizione: ''
} 

Successivamente, con dei prompt chiediamo di volta in volta all’utente la 
descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà. 

Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;) 

Stampiamo con un console.log il risultato di questo array di studenti aggiornato.

Bonus
Visualizzare nell’html questi dati in una forma tabellare.
*/

var result = document.getElementById("result");

var students = [
    {
        name: "Antonio",
        surname: "Venezia",
        age: 21,
        description: ""
    },
    {
        name: "Daniele",
        surname: "Guadagno",
        age: 19,
        description: ""
    },
    {
        name: "Andrea",
        surname: "Ditaranto",
        age: 34,
        description: ""
    }
]

console.log("Questi gli array dei dati PRIMA di aver inserito una descrizione: ", students);

for(var i = 0; i < students.length; i++) {
    var userDescription = prompt("Inserisci una descrizione")
    students[i].description = userDescription;
    result.innerHTML += students[i].name + "<br>" + students[i].surname + "<br>" + students[i].age + "<br>" + students[i].description + "<hr>";  
}

console.log("Questi gli array dei dati DOPO aver inserito la descrizione: ", students);