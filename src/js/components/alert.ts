
function init() {

	document.addEventListener('click', (event: Event) => {

		let item = <HTMLElement>event.target;
		let parent = item.parentElement;
		let target;

		if (item.classList.contains('alert-close') || (parent && parent.classList.contains('alert-close'))) {
			event.preventDefault();
			event.stopPropagation();
			let alert: HTMLElement | null = item.closest('.alert');
			if (alert) {
				alert.classList.add('hide');
			}
		}
	});
}

export default { init };