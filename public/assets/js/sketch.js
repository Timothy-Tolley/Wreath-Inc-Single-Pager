// var img
// var x = 0
// var y = 0 
// function preload() {
//   img = loadImage("https://res.cloudinary.com/timstales/image/upload/v1540000730/wreath-logo.svg");
// }
// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight);
// }

// function draw () {
//   clear()
//   x = lerp(x, mouseX-120, 0.05);
//   y = lerp(y, mouseY+10, 0.05);
//   var inverseX = width-x-200;
//   var inverseY = height-y-20;
//   tint(0, 170, 204)
//   image(img, y, x);
//   image(img, inverseY, inverseX);
// }


var numSegments = 10,
  x = [],
  y = [],
  angle = [],
  segLength = 30,
  img,
  targetX, 
  targetY;

for (var i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

function preload() {
  img = loadImage("assets/wreath-inc-logo.svg");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  strokeWeight(20);
  stroke(255, 100);
  x[x.length-1] = width/2; // Set base x-coordinate
  y[x.length-1] = height/2;  // Set base y-coordinate
}

function draw() {
  clear()
  image(img, width/2, height/2, 600);
  reachSegment(0, mouseX, mouseY);
  for(var i=1; i<numSegments; i++) {
    reachSegment(i, targetX, targetY);
  }
  for(var j=x.length-1; j>=1; j--) {
    positionSegment(j, j-1);
  }
  for(var k=0; k<x.length; k++) {
    segment(x[k], y[k], angle[k], (k+1)*5);
  }
}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  angle[i] = atan2(dy, dx);
  targetX = xin - cos(angle[i]) * segLength;
  targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  // rotate(a);
  image(img, 0, 0);
  pop();
}

