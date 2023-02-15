# lab-3-kah1an
lab-3-kah1an created by GitHub Classroom
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  musicColor(-100, -100, 0.5);
  musicColor(0, 0, 1);
  musicColor(100, 100, 0.5);
}

function musicColor(translateX, translateY, scaleNote) {
  push();
  translate(translateX, translateY);
  pop();
  scale(scaleNote);
  if (mouseX < 133.33) {
    fill("orchid");
  } else if (mouseX >= 133.33 && mouseX < 266.66) {
    fill("mediumorchid");
  } else {
    fill("darkorchid");
  }
  rect(170, 150, 20, 100);
  ellipse(155, 245, 70, 50);
  rect(170, 150, 100, 20);
  rect(260, 150, 20, 100);
  ellipse(245, 245, 70, 50);
  
}
