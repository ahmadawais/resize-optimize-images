/* RESIZE OPTIMIZE IMAGES */
const Jimp = require('jimp');

/**
 * Resize + optimize images.
 *
 * @param Object options Customizable Options.
 * @param Array images An array of images paths.
 * @param Number width A number value of width e.g. 1920.
 * @param Number height Optional number value of height e.g. 1080.
 * @param Number quality Optional number value of quality of the image e.g. 90.
 */
module.exports = async (options = {}) => {
	const defaultOptions = {
		images: [],
		width: 1920,
		height: Jimp.AUTO,
		quality: 90
	};

	const opt = { ...defaultOptions, ...options };
	await Promise.all(
		opt.images.map(async imgPath => {
			const image = await Jimp.read(imgPath);
			await image.resize(opt.width, opt.height);
			await image.quality(opt.quality);
			await image.writeAsync(imgPath);
		})
	);
};
