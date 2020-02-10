let x,y,xoff,s,d,yspeed;
let timer=10;
let secondis;
let deltaTime=10;

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
  countdown();
  textSize(200);
  text(timer,200,200);
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
}

function descend(){
    y+=yspeed;
}

function initPos(){
  x=width*.5;
  y=height;
  s=300;
  yspeed=5;
}

function drawBubble(){
  noStroke();
  fill(50,50,128,50);
  circle(x,y,s/timer);
}

function countdown(){
  secondis=int(millis()/1000);
  timer=deltaTime-secondis;
  if(timer<=0) deltaTime=secondis+10;
}
