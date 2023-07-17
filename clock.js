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
  
  let seconds = obj.seconds;
  
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Seconds: " + seconds, width / 2, 200);

  let hours_radius = map(obj.hours, 0, 59, 1, 150);
  fill(249, 140, 255);// pink
  ellipse(width / 3, 350, hours_radius);

  let minutes_radius = map(obj.minutes, 0, 59, 1, 150);
  fill(140, 255, 251) // blue
  ellipse(width / 2, 350, minutes_radius);

  let seconds_radius = map(seconds, 0, 59, 1, 150);
  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, 350, seconds_radius);
}
