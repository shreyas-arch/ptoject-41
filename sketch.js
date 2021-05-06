var anton;
var torus;
var assasin;
var steve;
var sara;
var burninghouse;
var backgroundimg;
var player ;
var villain
var hans;
var father;
var mother;
var b1;
var b2;
var b3;
function setup() {
  createCanvas(800,400);
  
  invisibleground=createSprite(750,390,2000,20);
  invisibleground.visible=false;
  b1=createSprite(600,300,40,10);
  b1.shapeColor="darkgrey";
  b1.visible=true;
}
function preload(){
  anton=loadImage("homework/adult anton.png");
  torus=loadImage("homework/assasin.png");
  assasin=loadImage("homework/wilbur.png");
  steve=loadImage("homework/torus.png");
  sara=loadImage("homework/sara.png");
  burninghouse=loadImage("homework/maxresdefault__1_-removebg-preview.png");
  backgroundimg=loadImage("homework/superflat.png");
  b2=loadImage("homework/night image.png");
}
function draw() {
  background("black");
  textSize(100)
  text("1998",300,150);
  invisibleground.velocityX=-3
  if(invisibleground.x<0){
    invisibleground.x=200
  }
  if(keyDown("space")){
    player.velocityX=4
  } 
  if(mousePressedOver(b1)){
    start()
  }
  
  
  

  drawSprites();
}
function start() {
   b3=createSprite(0,0,400,800);
   b3.addImage(b2);
   b3.scale=3.5
  player=createSprite(100,290,3,3);
  player.addImage(anton)
 player.scale=0.5
 hans=createSprite(500,320,6,6);
  hans.addImage(assasin)
  hans.scale=0.5
   villian=createSprite(400, 280, 3, 3);
   villian.addImage(torus)
   villian.scale=0.5
}