/*
 * This is some example code
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;

    // start off with a 100x20 bar that takes 5 seconds to get across the screen from the center
    let secondsResetsAfterFive = seconds % 5;
    let secondsWithFraction   =  secondsResetsAfterFive + (millis / 1000.0);

    let startX = map(secondsWithFraction, 0, 5, -100, width);

    background(200,200,255); //  sky blue
    noStroke();
    fill(255);
    rect(startX, 200, 100, 20);
}

function draw_clock2(obj) {
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;

    background(200,200,255); //  sky blue

    // now draw 5 such bars
    for(let b=0; b<5; b++) {
        let startY = map(b, 0, 4, 100, height-100);

        // start off with a 100x20 bar that takes 5 seconds to get across the screen from the center
        let secondsResetsAfterFive = (seconds + b) % 5;
        let secondsWithFraction   =  secondsResetsAfterFive + (millis / 1000.0);

        let startX = map(secondsWithFraction, 0, 5, -100, width);

        noStroke();
        fill(255);
        rect(startX, startY, 100, 20);
        fill(0);
        textSize(40);
        text(b, startX, startY)
}
}

function draw_clock3(obj) {
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;

    background(200,200,255); //  sky blue

    let scramble_array = [2, 4, 1, 5, 3];

    // now draw 5 such bars
    for(let b=0; b<5; b++) {
        let startY = map(b, 0, 4, 100, height-100);

        // start off with a 100x20 bar that takes 5 seconds to get across the screen from the center
        let offset = scramble_array[b];
        let secondsResetsAfterFive = (seconds +offset) % 5;
        let secondsWithFraction   =  secondsResetsAfterFive + (millis / 1000.0);

        let startX = map(secondsWithFraction, 0, 5, -100, width);

        noStroke();
        fill(255);
        rect(startX, startY, 100, 20);
        fill(0);
        textSize(40);
        text(b, startX, startY)
    }
}

function draw_clock4(obj) {
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
        rect(startX, startY, 100, 20);
        // fill(0);
        // textSize(40);
        // text(b, startX, startY)
    }
}
