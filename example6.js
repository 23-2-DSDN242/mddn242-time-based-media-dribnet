/*
 * This is some example code
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

let img;

function preload() {
    img = loadImage('spaceship.png');
}

function draw_clock(obj) {
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;

    background(200,200,255); //  sky blue
    
    let scramble_array = [2, 8, 1, 7, 3, 6, 9, 4, 10, 5];

    // now draw 5 such bars
    for(let b=0; b<10; b++) {
        let startY = map(b, 0, 9, 100, height-100);

        // start off with a 100x20 bar that takes 5 seconds to get across the screen from the center
        let offset = scramble_array[b];
        let secondsResetsAfterFive = (seconds + offset) % 10;
        let secondsWithFraction   =  secondsResetsAfterFive + (millis / 1000.0);

        let startX = map(secondsWithFraction, 0, 10, -240, width);

        noStroke();
        fill(255);
        // rect(startX, startY, 100, 40);
        // image(img, startX, startY, 100, 40);
        if(b < 3) {
            snakeOnCloud(startX, startY, 150, 0.8);
        }
        else if (b < 6) {
            owl(startX, startY, 255, 0.8);
        }
        else {
            image(img, startX, startY, 240, 80);
        }
        // fill(0);
        // textSize(40);
        // text(b, startX, startY)
    }
}

function owl(x, y, g, s) {
    push();
    translate(x, y);
    scale(s);  // Set the createCanvas
    stroke(g); // Set the gray value
    strokeWeight(70);
    line(0, -35, 0, -65); // Body
    noStroke();
    fill(255-g);
    ellipse(-17.5, -65, 35, 35); // Left eye dome
    ellipse(17.5, -65, 35, 35);  // Right eye dome
    arc(0, -65, 70, 70, 0, PI);  // Chin
    fill(g);
    ellipse(-14, -65, 8, 8);  // Left eye
    ellipse(14, -65, 8, 8);   // Right eye
    quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
    pop();
  }
  
  /* draw a snake on a cloud at position x, y of size s and fill color c */
function snakeOnCloud(x, y, c, s) {
    push();
    translate(x, y);
    scale(s); // Set the scale
    fill(255); // Set cloud color to white
    noStroke();
    ellipse(0, 0, 80, 60); // Cloud body
    ellipse(60, 0, 60, 60);
    ellipse(-60, 0, 60, 60);
    ellipse(30, -30, 60, 60);
    ellipse(-30, -30, 60, 60);
    
    fill(c); // Set snake color
    noStroke();
    beginShape();
    vertex(0, 0); // Snake body
    bezierVertex(15, -30, 45, -30, 60, 0);
    bezierVertex(45, 30, 15, 30, 0, 0);
    endShape(CLOSE);
    
    fill(0); // Set snake eyes color to black
    ellipse(20, -10, 10, 10); // Left eye
    ellipse(40, -10, 10, 10); // Right eye
    
    pop();
  }
  