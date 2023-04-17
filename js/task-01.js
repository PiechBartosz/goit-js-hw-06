const liItem = document.querySelectorAll("#categories .item");

let categoriesNumber = console.log(`Number of categories: ${liItem.length}`);
let header;
let listItemsCount;

for (let i = 0; i < liItem.length; i++) {
	let header = liItem[i].querySelector("h2").textContent;
	let listItemsCount = liItem[i].querySelectorAll("ul li").length;
	console.log(`Category: ${header}
    Elements ${listItemsCount}`);
}

// console.log(categoriesNumber);

// const h2Type = document.querySelectorAll("#categories li.item h2");

// spr
// const h2Type = document.querySelectorAll("h2");

// const h2TypeArray = [...h2Type];

// function pick() {
// 	console.log(categoriesNumber);
// 	h2TypeArray.forEach((type) => console.log(type));
// }
// pick();

// const elements = document.querySelectorAll(".item ul li");
// console.log(elements);
