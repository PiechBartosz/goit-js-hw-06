let increment = document.querySelector('button[data-action="increment"]');
let decrement = document.querySelector('button[data-action="decrement"]');
let counter = document.querySelector("#value");
let counterValue = 0;

function increase() {
	counterValue += 1;
	counter.textContent = counterValue;
}

function decrease() {
	counterValue -= 1;
	counter.textContent = counterValue;
}

increment.addEventListener("click", increase);
decrement.addEventListener("click", decrease);

// Można też tak jak poniżej jeśli nie chcemy żeby wartość spadła poniżej 0!!!!!!!!!!!!!!!!!!!!

// let increment = document.querySelector('button[data-action="increment"]');
// let decrement = document.querySelector('button[data-action="decrement"]');
// let counter = document.querySelector("#value");
// let counterValue = 0;

// function increase() {
// 	counterValue += 1;
// 	counter.textContent = counterValue;
// }

// function decrease() {
// 	counterValue -= 1;
// 	zero();
// 	counter.textContent = counterValue;
// }

// function zero() {
// 	if (counterValue < 0) {
// 		counterValue = 0;
// 	}
// 	counter.textContent = counterValue;
// }

// increment.addEventListener("click", increase);
// decrement.addEventListener("click", decrease);
