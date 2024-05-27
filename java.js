function isNumber(value) {
    return !isNaN(value) && value !== null && value !== '';
}

function getFibonacciSeries(n) {
    let fibSeries = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < n; i++) {
        fibSeries.push(a);
        temp = a;
        a = b;
        b = temp + b;
    }

    return fibSeries;
}

function requestNumber() {
    let input;
    do {
        input = prompt("Ingrese un número:");
        if (!isNumber(input)) {
          alert("Error: ingrese un número válido.")
        }
     
    } while (!isNumber(input));

    return parseInt(input);
}
function displayFibonacciSeries() {
    const number = requestNumber();
    const fibSeries = getFibonacciSeries(number);
    console.log(fibSeries.join(', '));

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = fibSeries.join(', ');
}

window.onload = function() {
    displayFibonacciSeries();
};
