/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  let background_color = 50;

  if(alarm > 0 && alarm < 5) {
    background_color = map(alarm, 5, 0, 50, 240);
  }
  else if(alarm == 0) {
    if(millis < 500) {
      background_color = map(millis, 0, 500, 0, 200);
    }
    else {
      background_color = map(millis, 500, 1000, 200, 0);
    }
  }
  // background_color = 200;

  background(background_color);
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);

  let max_val = TWO_PI;
  if(alarm == 0) {
    max_val = 3 * TWO_PI;
  }

  let bounce1 = map(obj.millis, 0, 999, 0, max_val);
  let phase1 = sin(bounce1);
  let y_bounce1 = map(phase1, -1, 1, -75, 75);

  let bounce2 = map((obj.millis+100), 0, 999, 0, max_val);
  let phase2 = sin(bounce2);
  let y_bounce2 = map(phase2, -1, 1, -75, 75);

  let hours_radius = map(obj.hours, 0, 59, 1, 150);
  fill(249, 140, 255);// pink
  ellipse(width / 5, 350 + y_bounce1, hours_radius);

  let minutes_radius = map(obj.minutes, 0, 59, 1, 150);
  fill(140, 255, 251) // blue
  ellipse(2 * width / 5, 350 + y_bounce2, minutes_radius);

  let secondsWithFraction   = seconds + (millis / 1000.0);
 
  // text("Seconds with fraction: " + secondsWithFraction, width / 2, 50);

  let seconds_radius = 0;
  if(secondsWithFraction <= 59)  {
    seconds_radius = map(secondsWithFraction, 0, 60, 1, 300);
  }
  else {
    seconds_radius = map(millis, 0, 999, 300, 1);
  }

  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, height/2, seconds_radius);
}
