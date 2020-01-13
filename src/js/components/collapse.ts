
let activeDropdown: any = {};


function init() {

	document.addEventListener('click', (event: Event) => {

		let item = <Element>event.target;
		let target;

		if (item.getAttribute('data-action') == 'collapse') {
			event.preventDefault();
			event.stopPropagation();

			target = getTarget(item);
			if (target) toggle(target, item);
		} else {
			let parent = item.closest('[data-action]');
			if (parent && parent.getAttribute('data-action') == 'collapse') {
				event.preventDefault();
				event.stopPropagation();
				target = getTarget(parent);
				if (target) toggle(target, parent);
			}
		}
	});
}

function getTarget(item: Element): Element | undefined {

	let target;
	let targetName = item.getAttribute('data-target');
	if (targetName) target = <Element>document.getElementById(targetName);
	return target;
}


function toggle(target: Element, button: Element) {

	let parent: Element;
	let idParent = target.getAttribute('data-parent');
	if (idParent) {
		parent = <Element>document.getElementById(idParent);
		if (parent) {
			let others = parent.querySelectorAll(`[data-parent="${idParent}"]:not(#${target.id})`);
			others.forEach((e: Element) => {
				hide(<HTMLElement>e);
			});
		}
	}

	if (target.classList.contains('show')) hide(<HTMLElement>target);
	else show(<HTMLElement>target);
	// let shown = target.classList.toggle('show');
	// button.classList.toggle('active', shown);
}


function show(element: HTMLElement) {

	var sectionHeight = element.scrollHeight;
	// have the element transition to the height of its inner content
	element.style.height = sectionHeight + 'px';

	// when the next css transition finishes (which should be the one we just triggered)
	element.addEventListener('transitionend', transitionedEventListener);

	// mark the section as "currently not collapsed"
	element.classList.add('show');
	toggleButtons(element, true);
}


function transitionedEventListener(e: Event) {

	let element = (<HTMLElement>e.target);
	// remove this event listener so it only gets triggered once
	element.removeEventListener('transitionend', transitionedEventListener);

	// remove "height" from the element's inline styles, so it can return to its initial value
	element.style.height = "";
}



function hide(element: HTMLElement) {


	if (element.classList.contains('show')) {

		var sectionHeight = element.scrollHeight;
		var elementTransition = element.style.transition;
		element.style.transition = '';

		requestAnimationFrame(function() {
			element.classList.remove('show');
			element.style.height = sectionHeight + 'px';
			element.style.transition = elementTransition;

			requestAnimationFrame(function() {
				element.style.height = 0 + 'px';
			});
		});
	}
	toggleButtons(element, false);
}


function toggleButtons(target: Element, toggleActive: boolean) {

	let buttons = document.querySelectorAll(`[data-action="collapse"][data-target="${target.id}"]`);
	buttons.forEach((e: Element) => {
		if (toggleActive) e.classList.add('active');
		else e.classList.remove('active');
	});
}



export default { init };