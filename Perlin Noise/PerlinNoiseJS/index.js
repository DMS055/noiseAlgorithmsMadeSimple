// Implementation using p5.js

let i = 0.1;

function setup() {
	createCanvas(400, 400);
	pixelDensity(1);
}

function draw() {
	let yo = 0;
	loadPixels();
	for (let y = 0; y < height; y++) {
		let xo = 0;
		for (let x = 0; x < width; x++) {
			let index = (x + y * width) * 4;
			let r = noise(xo, yo) * 255;
			pixels[index + 0] = r;
			pixels[index + 1] = r;
			pixels[index + 2] = r;
			pixels[index + 3] = 255;

			xo += i;
		}
		yo += i;
	}
	updatePixels();
}
