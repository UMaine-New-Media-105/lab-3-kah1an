function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  musicColor();

  function musicColor() {
    rect(170, 150, 20, 100);
    ellipse(155, 245, 70, 50);
    rect(170, 150, 100, 20);
    rect(260, 150, 20, 100);
    ellipse(245, 245, 70, 50);

    if (mouseX < 133.33) {
      fill("orchid");
    } else if (mouseX >= 133.33 && mouseX < 266.66) {
      fill("mediumorchid");
    } else {
      fill("darkorchid");
    }
  }
}

