function setup(){
    createCanvas(windowWidth,windowHeight);
}

let start = 0;
var inc = 0.02;
function draw(){
    background(10);
    noFill();
    let yoff = start;
    beginShape();
    for(let x=0;x<=width;x++){
        strokeWeight(5);
        stroke(255,0,0);
        let y = noise(yoff)*height;
        vertex(x, y);
        yoff += inc;
    }
    endShape();
    start+=inc;
}