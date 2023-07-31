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
    angleMode(DEGREES);
    background(253, 196, 255);
    stroke(255);
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    textSize(80);
 

    let hourC = color(255, 250, 115); // light yellow
    let minuteC = color(171,225,239); // light blue
    let secondC = color(140, 255, 140); // light green
    

    drawHour(250,200,obj.hours,hourC,minuteC);

    drawMinute(450,350,obj.minutes,minuteC,secondC);

    drawSecond(650,200,obj.seconds,secondC,hourC);
  
    noStroke();
    fill(255);
    ellipse(450, 100, 100);

    fill(253, 196, 255);

    if(obj.hours < 5 || obj.hours > 19 ) {
        ellipse(475, 100, 100);// night 
    }    
    else if(obj.hours >=5 && obj.hours < 7 ){
        ellipse(450, 120, 100);//  dawn 
    }
    else if (obj.hours >=17 && obj.hours <= 19 ){
        ellipse(450, 65, 100);//  dusk 
    }
    else{
        fill(255);
        ellipse(450, 100, 100);
    }

}



function drawHour(x,y,curHour,Hc,Mc){
    fill(Hc);
    let hoursMap = map(curHour,0,23, 0,360);
    let colorLerpMap = map(curHour, 0,23, 0,1);
    let betweenColor= lerpColor(Hc,Mc,colorLerpMap);

    push();
        translate(x,y);
        ellipse(0,0, 200);
        rotate(hoursMap);
        translate(0,-160)
        fill(betweenColor);
        ellipse(0,0, 30);
    pop();
}


function drawMinute(x,y, curMin,Mc,Sc){
    fill(Mc);
    let minuteMap = map(curMin, 0,59, 0, 360);
    let colorLerpMap = map(curMin, 0,59, 0,1);
    let betweenColor= lerpColor(Mc,Sc,colorLerpMap);

    push();
    translate(x,y);
    ellipse(0,0, 200);
    rotate(minuteMap);
    fill(betweenColor);
    ellipse(0,-130, 30);
    pop();
}

function drawSecond(x,y,curSec,Sc,Hc){
    
    fill(Sc);

    let colorLerpMap = map(curSec, 0,59, 0,1);
    let secondMap = map(curSec, 0,59, 0, 360);

    let betweenColor= lerpColor(Sc,Hc,colorLerpMap);
    push();
    translate(x,y);
    ellipse(0,0, 200);
    rotate(secondMap);
    fill(betweenColor);
    ellipse(0,-130, 30);
    pop();
}