const clearConsole = require('clear-any-console');
const resizeOptimizeImages = require('./index.js');
const sizeOf = require('image-size');
const test = require('ava');

(async () => {
	clearConsole();
	const images = [`${__dirname}/images/VSCode.jpg`, `${__dirname}/images/JAMstack.jpg`];

	// Usage.
	await resizeOptimizeImages({
		images,
		width: 1920,
		quality: 90
	});

	// Tests.
	images.map(async (image, i) => {
		let dimensions = await sizeOf(image);

		test(`${i}: should be 1920`, t => {
			t.is(dimensions.width, 1920);
		});
	});
})();
