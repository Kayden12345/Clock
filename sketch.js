function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0); 
  translate(200,200)
  rotate(-90)
  
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  noFill()
  stroke(255,193,211);
  let secAngle = map(sc,0,60,0,360)
  arc(0,0,300,300,0,secAngle);

  stroke(206,193,255)
  let minAngle = map(mn,0,60,0,360)
  arc(0,0,280,280,0,minAngle);

  stroke(193,255,242)
  let hrAngle = map(hr % 12,0,12,-90,360)
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(secAngle)
  stroke(255,193,211)
  line(0,0,100,0)
  pop();

  push();
  rotate(minAngle)
  stroke(206,193,255)
  line(0,0,75,0)
  pop();
  
  push();
  rotate(hrAngle)
  stroke(193,255,242)
  line(0,0,50,0)
  pop();

  stroke(255);
  point(0,0)

  //strokeWeight(4);
 // stroke(255);
  //noFill()
 // ellipse(200,200,300,300);

 

 // fill(255);
 // noStroke();
 // text(hr + ':' + mn + ':' + sc, 10,200 )

  drawSprites();
}