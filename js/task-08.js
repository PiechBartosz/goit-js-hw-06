const form = document.querySelector(".login-form");
const mail = form.elements.email;
const password = form.elements.password;
const button = form.elements.submit;

function logIn(event) {
	event.preventDefault();

	if (mail.value === "" || password.value === "") {
		alert("Wypełnij wszystkie pola!");
	} else {
		const formData = {
			email: mail.value,
			password: password.value,
		};

		console.log(formData);
		form.reset();
	}
}
form.addEventListener("submit", logIn);
