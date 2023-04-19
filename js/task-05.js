let inputName = document.querySelector("#name-input");
let currentName = document.querySelector("#name-output");

function enterName() {
	if (inputName.value === "") {
		currentName.textContent = "Anonim";
	} else {
		currentName.textContent = inputName.value;
	}
}

inputName.addEventListener("input", enterName);
