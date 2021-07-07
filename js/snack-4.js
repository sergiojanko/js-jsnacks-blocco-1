// Inizializzo Array

var firstList = [2, 20, 57, 30, 40, 50, 80, 96, 20];
var secondList = [80, 25, 36, 52, 887];

// Verifico lunghezza dei due array e aggiungo elementi random all'array più corto

while (firstList.length !== secondList.length) {
    if (firstList.length > secondList.length) {
        secondList.push(Math.floor(Math.random() * 1000) + 1);
    } else {
        firstList.push(Math.floor(Math.random() * 1000) + 1);
    }
}

console.table(firstList);
console.table(secondList);