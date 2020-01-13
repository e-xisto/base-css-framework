
function init() {

	document.addEventListener('click', (event: Event) => {

		let item = <Element>event.target;

		if (item.getAttribute('data-action') == 'offcanvas') {
			event.preventDefault(); //quitamos el prevent default porque me quita comportamiento por defecto de los <a>

			toggle(item.getAttribute('data-target'), item);
		} else {
			let parent = item.closest('[data-action]');
			if (parent && parent.getAttribute('data-action') == 'offcanvas') {
				event.preventDefault();
				toggle(parent.getAttribute('data-target'), parent);
			}
		}
	});

}


function toggle(id: string | null, button: Element) {

	if (!id) return;
	let offcanvas = <HTMLElement>document.getElementById(id);
	if (!offcanvas) return;

	let shown = offcanvas.classList.toggle('show');

	let actions = document.querySelectorAll(`[data-action="offcanvas"][data-target="${id}"]`);
	actions.forEach((e: Element) => {
		e.classList.toggle('active');
	});

	if (offcanvas.classList.contains('offcanvas-noscroll')) {
		document.body.classList.toggle('noscroll', shown);
	}

	offcanvas.classList.forEach((clase: string) => {

		if (clase.startsWith('offcanvas-push-')) {

			let wrap = <HTMLElement>document.getElementsByClassName('offcanvas-wrap')[0];
			if (wrap) {
				let transform = '';
				if (shown) {
					if (clase.endsWith('-right')) transform = `translateX(-${offcanvas.offsetWidth}px)`;
					if (clase.endsWith('-left')) transform = `translateX(${offcanvas.offsetWidth}px)`;
					if (clase.endsWith('-top')) transform = `translateY(${offcanvas.offsetHeight}px)`;
					if (clase.endsWith('-bottom')) transform = `translateY(-${offcanvas.offsetHeight}px)`;
				}
				wrap.style.transform = transform;

				wrap.classList.toggle(clase.replace('push', 'wrap'), shown);
				backdrop(shown, id, offcanvas);
				return;
			}
		}
	});
}

function backdrop(shown: boolean, target: string, offcanvas: HTMLElement) {
	let velos = document.getElementsByClassName('offcanvas-backdrop');
	if (velos.length) {
		document.body.removeChild(velos[0]);
	} else {
		let elem = document.createElement('div');
		elem.classList.add('offcanvas-backdrop');

		if (!offcanvas.classList.contains('offcanvas-noclick')) {
			elem.setAttribute('data-action', 'offcanvas');
			elem.setAttribute('data-target', target);
		}

		document.body.appendChild(elem);
	}
	document.body.classList.toggle('noscroll', shown);
}


export default { init };