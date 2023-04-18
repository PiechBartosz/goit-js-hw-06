const liItem = document.querySelectorAll("#categories .item");

let categoriesNumber = console.log(`Number of categories: ${liItem.length}`);

for (let i = 0; i < liItem.length; i++) {
	let header = liItem[i].querySelector("h2").textContent;
	let listItemsCount = liItem[i].querySelectorAll("ul li").length;
	console.log(`Category: ${header}
    Elements ${listItemsCount}`);
}
