const background = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function value() {
	let color = getRandomHexColor();
	background.style.backgroundColor = color;
	span.textContent = color;
}

function main() {
	getRandomHexColor;
	value();
}

button.addEventListener("click", main);
