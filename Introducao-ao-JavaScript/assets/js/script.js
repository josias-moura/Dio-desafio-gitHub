var currentNumberwrepper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberwrepper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberwrepper.innerHTML = currentNumber;
}