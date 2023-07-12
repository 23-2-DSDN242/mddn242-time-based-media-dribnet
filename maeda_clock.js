// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  black
  fill(255); // white

  // this the number one
  rect(100, 100, 50, 300);

  // this is the number zero
  rect(200, 100, 50, 300);
  rect(300, 100, 50, 300);
  rect(200, 100, 100, 30);
  rect(200, 370, 100, 30);

  quad(158, 55, 199, 14, 392, 66, 351, 107);
  fill(255, 0, 0);
  triangle(347, 54, 392, 9, 392, 66);
}
