let x,y,xoff,s,d,yspeed;
function preload(){
  // put preload code here
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  initPos();
}
function draw() {
  b();
  outOfCanvas();
  move();
  drawBubble();
}

function mouseReleased(){
  console.log(y);  
}
function b(){
  background(255);
}
function outOfCanvas(){
    if((y<0)||(y>height)) yspeed=-yspeed;
    //else return true;
}
function move(){
    y+=yspeed;
    /*x+=int(noise(-20,20));
    xoff = xoff + 0.01;
    x = noise(xoff) * width;*/
}
function initPos(){
  x=width*.5;
  y=height;
  s=random(5,300);
  yspeed=15;
  //xoff=0;
  //d=s*.5;
}
function drawBubble(){
  noStroke();
  fill(50,50,128,50);
  circle(x,y,s);
}
