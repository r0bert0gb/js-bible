/* Find all menu elements by selector ".nav-link"
or by className "nav-link".

Use "for" loop to iterate through all menu items
Inside of the loop add "onclick" event handler to
each menu item.

In the "onclick" event handler:
	1. Remove first "active" class from all	menu elements
	2. Add "active" class to the clicked menu element
	3. Log to the console message with the name	of the clicked menu item */

"strict mode";

const itensMenu = document.getElementsByClassName("nav-link");
const LENGTH = itensMenu.length;

for (let itemMenu of itensMenu) {

	itemMenu.onclick = function() {

		// for(let i = 0; i < LENGTH; i++) {
		// for (let indice = 0; indice < LENGTH; indice++) {

		// 	itensMenu[indice].classList.remove("active");
		// }

		for(let itemMenu of itensMenu) {
			itemMenu.classList.remove("active");
		}

		console.log("Índice atual: " + itemMenu);

		itemMenu.classList.add("active");

		console.log("String do elemento: " + itemMenu.innerHTML);

	};
}
