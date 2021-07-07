// Inizializzo Array

var firstList = [2, 20, 57, 30, 40, 50, 80, 96, 20];
var secondList = [80, 25, 36, 52, 887];

var list1Element = document.getElementById("snack-4-list1");
var list2Element = document.getElementById("snack-4-list2");

// Verifico lunghezza dei due array e aggiungo elementi random all'array più corto

while (firstList.length !== secondList.length) {
    if (firstList.length > secondList.length) {
        secondList.push(Math.floor(Math.random() * 1000) + 1);
    } else {
        firstList.push(Math.floor(Math.random() * 1000) + 1);
    }
}

// Output

console.table(firstList);
console.table(secondList);

var listOutput = "";
for (var i = 0; i < firstList.length; i++) {
    listOutput += "<li>" + firstList[i] + "</li>"
}

list1Element.innerHTML = listOutput;
var listOutput = "";
for (var i = 0; i < secondList.length; i++) {
    listOutput += "<li>" + secondList[i] + "</li>"
}

list2Element.innerHTML = listOutput;