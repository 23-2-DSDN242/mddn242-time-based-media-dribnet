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

        let startX = map(secondsWithFraction, 0, 10, -100, width);

        noStroke();
        fill(255);
        // rect(startX, startY, 100, 40);
        image(img, startX, startY, 100, 40);
        // fill(0);
        // textSize(40);
        // text(b, startX, startY)
    }
}
