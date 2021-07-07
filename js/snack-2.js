// Input numero

do {
    var num = parseInt(prompt("Inserisci un numero", "7"));
} while (isNaN(num) || num < 0);

// Verifica pari/dispari e output
if (num % 2 === 0) {
    console.log(num);
} else {
    console.log(num + 1);
}
