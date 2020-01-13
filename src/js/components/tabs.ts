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
