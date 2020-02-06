let x,y,xoff,s,d,yspeed;
function preload(){
  // put preload code here
}
function setup() {
  createCanvas(windowWidth,windowHeight)
  initPos();
}
function draw() {
  b();
  if(outOfCanvas()) initPos();
  else ascend();
  drawBubble();
}
function b(){
  background(255);
}
function outOfCanvas(){
    if(y>0) return false;
    else return true;
}
function ascend(){
    y-=yspeed;
    /*x+=int(noise(-20,20));
    xoff = xoff + 0.01;
    x = noise(xoff) * width;*/
}
function descend(){
    y+=yspeed;
}
function initPos(){
  x=width*.5;
  y=height;
  s=random(5,300);
  yspeed=5;
  //xoff=0;
  //d=s*.5;
}
function drawBubble(){
  noStroke();
  fill(50,50,128,50);
  circle(x,y,s);
}
