import { jarallax, jarallaxElement, jarallaxVideo } from 'jarallax';

function init() {
	jarallax(document.querySelectorAll('.parallax'), {
		imgElement: '.parallax-img'
	});

	let videos = document.querySelectorAll('.parallax-video');

	if (videos.length) jarallaxVideo();

	videos.forEach((element) => {
		let src = element.getAttribute('data-video-src');
		jarallax(element, { videoSrc: src });
	})
}

export default { init };
