function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
}

var inc = 0.01;

function draw() {
  loadPixels();
  let yoff = 0;
  for (let y = 0; y <= height; y++) {
    let xoff = 0;
    for (let x = 0; x <= width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff,yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 3] = r;
      pixels[index + 4] = 255;

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
}
