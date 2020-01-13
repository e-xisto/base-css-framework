
let modalActive = new Array<HTMLElement>();
let modals = new Map();

function init() {
	document.addEventListener('click', (event: Event) => {

		let item = <HTMLElement>event.target;
		let action = item.getAttribute('data-action');
		let target = item.getAttribute('data-target');
		if (action == 'modal-open' && target) {
			event.preventDefault();
			event.stopPropagation();

			show(target);
		} else {
			let parent = item.closest('[data-action]');
			if (parent && parent.getAttribute('data-action') == 'modal-open') {
				let target = parent.getAttribute('data-target');
				if (target) {
					event.preventDefault();
					event.stopPropagation();

					show(target);
				}
			}
		}
		if (action == 'modal-close') {
			event.preventDefault();
			event.stopPropagation();

			hide(target);
		} else {
			let parent = item.closest('[data-action]');
			if (parent && parent.getAttribute('data-action') == 'modal-close') {
				hide();
			}
		}

		if (item.classList.contains('modal') && item.classList.contains('show') && !item.classList.contains('modal-noclick')) {
			event.preventDefault();
			event.stopPropagation();
			hide();
		}
	});

	document.addEventListener('keyup', (event: KeyboardEvent) => {
		if (event.key == 'Escape') {
			hide();
		}
	});
}

function show(target: string, data?: any) {

	let element = document.getElementById(target);
	if (element) {
		if (data) {
			if (!getHtml(element)) storeHtml(element);

			let html = getHtml(element);
			for(let attr in data) {
				html = html.replace(new RegExp('\\{\\{' + attr + '\\}\\}', 'gi'), data[attr]);
			}
			element.innerHTML = html;
		}


		element.classList.add('show');
		element.scrollTop = 0;
		let index = modalActive.push(element) - 1;
		if (index > 0) {
			let zIndex = parseInt(modalActive[index - 1].style.zIndex || '0') + 1000;
			element.style.zIndex = zIndex.toString();
		} else {
			if (!element.style.zIndex) element.style.zIndex = '1000';
		}

		document.body.classList.add('noscroll');
	}
}

function hide(target?: string | null) {

	let element: HTMLElement | null | undefined;
	if (target) {
		element = document.getElementById(target);
		let index;
		if (element) index = modalActive.indexOf(element);
		if (index !== undefined) {
			modalActive.splice(index, 1);
		}
	} else
		element = modalActive.pop();

	if (element) {
		element.classList.remove('show');
		document.body.classList.remove('noscroll');
	}
}

function getHtml(element: HTMLElement): string {
	if (!modals.has(element.getAttribute('id'))) return '';
	return modals.get(element.getAttribute('id'));
}

function storeHtml(element: HTMLElement) {
	if (element.getAttribute('id')) {
		modals.set(element.getAttribute('id'), element.innerHTML);
	}
}


	class Modal {

		close(target?: string) {
			hide(target);
		}

		open(target: string, data?: any, callback?: CallableFunction) {
			show(target, data);
			if (callback) callback(data);
		}
	}

	(<any>window).Modal = new Modal();

export default { init };
