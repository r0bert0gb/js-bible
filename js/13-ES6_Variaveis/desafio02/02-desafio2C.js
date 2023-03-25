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

	//* encontrar os elementos que possuam a classe "nav-link"

	const itensMenu = document.getElementsByClassName("nav-link");
	const LENGHT = itensMenu.length;

	//* adicionar o evento "onclick" em todos elementos de classe "nav-link"
	for (let itemMenu of itensMenu) {

		itemMenu.onclick = function() {

			for(let removedorActive of itensMenu) {
				removedorActive.classList.remove("active");
			}

			itemMenu.classList.add("active");
			console.log(itemMenu.innerHTML + " foi clicado!");
		}
	}
