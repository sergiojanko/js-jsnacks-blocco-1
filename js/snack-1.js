// Inizializzazione variabili

var sum = 0;

//Input numeri e somma (for)

/* for (var i = 1; i <= 5; i++) {
    do {
        var num = parseInt(prompt("Inserisci il " + i + "° numero"))        
    } while (isNaN(num));
    sum += num;
} */

// Input numeri e somma (while)

var i = 1;
var num;
while (i <= 5) {
    do {
        num = parseInt(prompt("Inserisci il " + i + "° numero"))        
    } while (isNaN(num));
    sum += num;
    i++;
}

// Output

console.log(sum);