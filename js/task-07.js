const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function changeSize() {
	let fontSize = input.value;
	if (fontSize < 16) {
		fontSize = 16;
	} else if (fontSize > 92) {
		fontSize = 92;
	}
	text.style.fontSize = `${fontSize}px`;
}

input.addEventListener("input", changeSize);
