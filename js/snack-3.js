// Inizializzo array

var lastnames = ["Rossi", "Bianchi", "Verdi", "Gialli", "Neri"];
var firstnames = ["Paolo", "Luca", "Giorgio", "Elisa", "Anna", "Gianni"];
var invited = [];

// genero inviti random

while (invited.length !== 3) {
    var rndName = Math.floor(Math.random() * (firstnames.length));
    var rndLastname = Math.floor(Math.random() * (lastnames.length));
    var rndInvite = firstnames[rndName] + " " + lastnames[rndLastname];

    // Verifico se il nome generato è gia presente
    if (!invited.includes(rndInvite)) {    
        invited.push(rndInvite);
    }
}

// Output

console.table(invited);

