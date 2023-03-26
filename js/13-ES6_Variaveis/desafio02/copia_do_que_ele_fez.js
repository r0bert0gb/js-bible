/* Find all menu elements by selector ".nav-link"
or by className "nav-link".

Use "for" loop to iterate through all menu items
Inside of the loop add "onclick" event handler to
each menu item.

In the "onclick" event handler:
	1. Remove first "active" class from all	menu elements
	2. Add "active" class to the clicked menu element
	3. Log to the console message with the name	of the clicked menu item
 */

// const itensMenu = document.getElementsByClassName("nav-link");

const itensMenu = document.querySelectorAll(".nav-link");
const QTDE_ELEMENTOS = itensMenu.length;

console.log(QTDE_ELEMENTOS);

for (let i = 0; i < QTDE_ELEMENTOS; i++) {

	const itemMenu = itensMenu[i];

	itemMenu.onclick = function() {

		for (let j = 0; j < QTDE_ELEMENTOS; j++) {

			itensMenu[j].classList.remove("active");
		}

		itemMenu.classList.add("active");
	};
}

console.log(i);
