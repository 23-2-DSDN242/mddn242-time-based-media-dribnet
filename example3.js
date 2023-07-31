/*
 * use p5.js to draw a clock on a 960x500 canvas
 *
 * Horizon Example
 * This is an example of:
 * 
 * Day vs night mode
 * Order of drawing (background first)
 * LerpColor for smooth transitions
 *
 */ 

function draw_clock(obj) {
    const night_sky = color(50, 50, 60);
    const night_ground = color(30, 60, 30);
    const day_sky = color(100, 100, 230);
    const day_ground = color(100, 200, 100);
    const sun_yellow = color(240, 240, 0);

    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-999
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

    let current_ground = null;

    if (obj.hours >= 7 && obj.hours < 8) {
        // sunrise
        let hour_fraction = obj.minutes / 60;
        let cur_sky = lerpColor(night_sky, day_sky, hour_fraction);
        current_ground = lerpColor(night_ground, day_ground, hour_fraction);
        background(cur_sky);
    }
    else if (obj.hours >= 19 && obj.hours < 20) {
        // sunrise
        let hour_fraction = obj.minutes / 60;
        let cur_sky = lerpColor(day_sky, night_sky, hour_fraction);
        current_ground = lerpColor(day_ground, night_ground, hour_fraction);
        background(cur_sky);
    }
    else if(obj.hours >= 8 && obj.hours < 20) {
        // daytime
        background(day_sky);
        current_ground = day_ground;
    }
    else {
        // nightime
        background(night_sky);
        current_ground = night_ground;
    }

    let sun_height = null;
    if (obj.hours <= 12) {
        sun_height = map(obj.hours, 0, 12, height, 0);        
    }
    else {
        sun_height = map(obj.hours, 12, 23, 0, height);        
    }

    fill(sun_yellow);
    ellipse(width/2, sun_height, 100);

    fill(current_ground);

    rect(0, height/2, width, height);

    // debug helper
    textSize(50)
    text("debug:", 50, 100)
    textSize(100)
    text(obj.hours, 200, 100)
}