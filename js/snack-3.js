// Inizializzo array

var lastnames = ["Rossi", "Bianchi", "Verdi", "Gialli", "Neri"];
var firstnames = ["Paolo", "Luca", "Giorgio", "Elisa", "Anna", "Gianni"];
var invited = [];

var listElement = document.getElementById("snack-3-list");

// genero inviti random

    var rndName;
    var rndLastname;
    var rndInvite;

while (invited.length !== 3) {
    rndName = Math.floor(Math.random() * (firstnames.length));
    rndLastname = Math.floor(Math.random() * (lastnames.length));
    rndInvite = firstnames[rndName] + " " + lastnames[rndLastname];

    // Verifico se il nome generato è gia presente
    if (!invited.includes(rndInvite)) {    
        invited.push(rndInvite);
    }
}

// Output

console.table(invited);
var outputString = "";
for (var i = 0; i < invited.length; i++) {
    outputString += "<li>" + invited[i] + "</li>"; 
}

listElement.innerHTML = outputString;

