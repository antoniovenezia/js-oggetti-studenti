//PARTE 1

//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.

var studentElement = document.getElementById("part-1");

var studentPart1 = {
    name: "Antonio",
    surname: "Venezia",
    age: "21"
}

for (var k in studentPart1) {
    studentElement.innerHTML += k + ": " + studentPart1[k] + "<br>";
}


//PARTE 2

//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno 
//di essi, nome e cognome.  Ricordatevi, è un array, quindi? for.

var studentElement2 = document.getElementById("part-2");

var studentPart2 = [
    {
        name: "Antonio",
        surname: "Venezia"
    },
    {
        name: "Gianluca",
        surname: "Guadagno"
    }]


for (var x = 0; x < studentPart2.length; x++) {
    console.log("Lo studente si chiama: ", studentPart2[x].name, studentPart2[x].surname);
}


//PARTE 3

//Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di 
//aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.

var studentPart3 = {}

var studentName3 = prompt("Inserisci il nome dello studente");
var studentSurname3 = prompt("Inserisci il cognome dello studente");
var studentAge3 = prompt("Inserisci l'età dello studente");

studentPart3.name = studentName3;
studentPart3.surname = studentSurname3;
studentPart3.age = studentAge3;


console.log(studentPart3);
