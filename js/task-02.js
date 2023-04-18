const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
let ulList = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
	let list = document.createElement("li");
	list.textContent = ingredients[i];
	list.classList.add("item");
	ulList.append(list);
}

console.log(ulList);
