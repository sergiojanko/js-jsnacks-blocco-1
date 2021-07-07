// Input numero
var num;
var textElement = document.getElementById("snack-2-output")
do {
    num = parseInt(prompt("Inserisci un numero", "7"));
} while (isNaN(num) || num < 0);

// Verifica pari/dispari e output
if (num % 2 === 0) {
    console.log(num);
    textElement.innerHTML = "Hai inserito un numero pari: " + num;
} else {
    console.log(num + 1);
    textElement.innerHTML = "Hai inserito un numero dispari, numero successivo: " + (num + 1);
}
