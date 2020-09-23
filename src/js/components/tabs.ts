function init() {
	document.addEventListener('click', (event: Event) => {

		let item = <Element>event.target;

		if (isHash(item.getAttribute('href')) && item.classList.contains('tabs-item')) {
			event.preventDefault();
			event.stopPropagation();

			active(item);
			show(item);
		}
	});

	createResponsiveMenu();

}


function createResponsiveMenu() {

	const tabs = document.getElementsByClassName('tabs-responsive');
	Array.from(tabs).forEach((tab: Element) => {
		const tabsItems = tab.querySelectorAll('.tabs-item');

		const menu = document.createElement('div')
		menu.classList.add("tabs-menu");

		const dropdown = document.createElement('div');
		dropdown.classList.add('dropdown');
		menu.append(dropdown);

		// <a class="dropdown-toggle"><i class="icon-menu"></i></a>
		const toggle = document.createElement('a');
		toggle.classList.add('dropdown-toggle');
		const icon = document.createElement('i');
		icon.classList.add('icon-menu');
		toggle.append(icon);
		dropdown.append(toggle);

		const ul = document.createElement('ul');
		ul.classList.add('dropdown-menu');
		ul.classList.add('dropdown-menu-right');
		dropdown.append(ul);

		tabsItems.forEach(function(element) {
			let li = document.createElement('li');
			li.classList.add('dropdown-item');
			let a = document.createElement('a');
			a.innerHTML = element.innerHTML;
			a.setAttribute('href', element.getAttribute('href') || '');
			li.append(a);

			a.addEventListener('click', (event) => {
				active(element);
				show(element);
			});
			ul.append(li);
		});
		tab.append(menu);
	});
}


function isHash(id: string | null): boolean {

	if (!id) return false;
	return id.startsWith('#');
}

function active(tab: Element) {

	if (!tab.classList.contains('active')) {
		let container = tab.closest('.tabs');
		if (container) {
			let allTabs = <HTMLCollectionOf<Element>>container.getElementsByClassName('tabs-item');
			Array.from(allTabs).forEach((item: Element) => {
				item.classList.remove('active');
			});
		}
		tab.classList.add('active');
	}
}

function show(tab: Element) {

	let id = tab.getAttribute('href') ? <string>tab.getAttribute('href') : '';
	if (isHash(id)) id = id.substr(1,id.length - 1);

	let panel = <Element>document.getElementById(id);
	if (!panel.classList.contains('show')) {

		let container = panel.closest('.tabs-content');
		if (container) {
			let allPanels = <HTMLCollectionOf<Element>>container.getElementsByClassName('tabs-panel');
			Array.from(allPanels).forEach((item: Element) => {
				item.classList.remove('show');
			});
		}
		panel.classList.add('show');
	}
}

export default { init };
