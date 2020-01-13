import * as simpleParallax from 'simple-parallax-js'; // https://simpleparallax.com/

let elements: NodeListOf<HTMLElement>;

function init() {

	if (!elements) elements = <NodeListOf<HTMLElement>>document.querySelectorAll('.parallax');

	elements.forEach(function (element) {
		let options = loadDataOptions(element);

		// let parallax = new simpleParallax(element, options);
	});

}

function loadDataOptions(element: HTMLElement) {

	let options: simpleParallaxOptions = {};
	if (element.dataset.orientation) options.orientation = element.dataset.orientation;
	if (element.dataset.scale) options.scale = element.dataset.scale;
	if (element.dataset.overflow) options.overflow = element.dataset.overflow == 'true' ? true : false;
	if (element.dataset.delay) options.delay = Number(element.dataset.delay);
	if (element.dataset.transition) options.transition = element.dataset.transition;
	if (element.dataset.breakpoint) options.breakpoint = Number(element.dataset.breakpoint);
	return options;
}

interface simpleParallaxOptions {
	orientation?: string // default: up. up - right - down - left - up left - up right - down left - left right
	scale?: string // default 1.2 - need to be above 1.0
	overflow?: boolean // default false
	delay?: number // (int) default 0.4 - the delay in seconds
	transition?: string // default 'cubic-bezier(0,0,0,1)' - any css transition
	breakpoint?: number // default false - the breakpoint is in pixel
}

export default { init };
