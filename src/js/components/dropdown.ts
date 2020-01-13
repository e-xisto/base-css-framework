
let activeDropdown: any = {};


function init() {

	document.addEventListener('click', (event: Event) => {

		let item = <Element>event.target;
		let parent = item.parentElement;

		if (item.classList.contains('dropdown-toggle') || (parent && parent.classList.contains('dropdown-toggle'))) {
			event.preventDefault();
			event.stopPropagation();

			let container = item.closest('.dropdown');
			if (container) toggle(container, item);
		} else {
			hideActive();
		}
	});

}

function hideActive() {
	if (activeDropdown.container) { // && !item.classList.contains('dropdown-item')) {
		let menus = <NodeListOf<Element>>activeDropdown.container.getElementsByClassName('dropdown-menu');
		Array.from(menus).forEach((menu: Element) => {
			hide(activeDropdown.container, activeDropdown.button, menu);
		});
	}
}


function toggle(container: Element, button: Element) {

	let menus = container.getElementsByClassName('dropdown-menu');
	Array.from(menus).forEach((menu) => {
		if (menu.classList.contains('show')) hide(container, button, menu);
		else show(container, button, menu);
	});
}


function show(container: Element, button: Element, menu: Element) {

	hideActive();

	button.classList.add('active');
	menu.classList.add('show');

	activeDropdown.container = container;
	activeDropdown.button = button;
}


function hide(container: Element, button: Element, menu: Element) {

	button.classList.remove('active');
	menu.classList.remove('show');

	activeDropdown = {};
}




export default { init };