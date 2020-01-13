
let ellipses = new Array<HTMLElement>();

function init() {
	document.addEventListener("DOMContentLoaded", function (event) {

		updateEllipseElements();

		document.addEventListener('resize', cutElements);
		document.addEventListener("DOMNodeInserted", function () {
			updateEllipseElements();
			cutElements();
		});
		cutElements();
	});
}


function updateEllipseElements() {

	// let elements = Array.from(document.getElementsByClassName('ellipsis'));
	// for (let element of elements) {
	// 	if(!ellipses.includes(<HTMLElement>element)) ellipses.push(<HTMLElement>element);
	// }
	ellipses = <Array<HTMLElement>>Array.from(document.getElementsByClassName('ellipsis'));

}

function cutElements() {
	for (let element of ellipses) {
		if (element.getAttribute('data-ellipsis')) {
			cutLines(element, Number(element.getAttribute('data-ellipsis')));
		}
		if (element.getAttribute('data-ellipsis-height')) {
			cutHeight(element, Number(element.getAttribute('data-ellipsis-height')));
		}
	}
}

function cutHeight(element: HTMLElement, pixels: number) {

	if (isNaN(pixels)) return;
	let lineHeight = parseInt(window.getComputedStyle(element).lineHeight || '24px');

	let lines = Math.floor(pixels / (lineHeight)) || 1;
	let height = lines * lineHeight;
	let actualHeight = parseInt(window.getComputedStyle(element).height || '');
	if (actualHeight >= height) {
		element.style.height = height + 'px';
		(<any>element.style)['-webkit-line-clamp'] = lines;
	}
}


function cutLines(element: HTMLElement, lines: number) {

	let lineHeight = parseInt(window.getComputedStyle(element).lineHeight || '24px');

	let height = lines * lineHeight;
	let actualHeight = parseInt(window.getComputedStyle(element).height || '');

	if (actualHeight >= height) {
		element.style.height = height + 'px';
		(<any>element.style)['-webkit-line-clamp'] = lines;
	}
}


export default { init };
