const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");

function checkLength() {
	if (input.value.length < dataLength) {
		input.classList.add("invalid");
	} else {
		input.classList.remove("invalid");
		input.classList.add("valid");
	}
}

input.addEventListener("blur", checkLength);
