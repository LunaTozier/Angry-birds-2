const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground ; 
var box1, box2, box3, box4, box5 , box6, box7, box8;
var pig1, pig2, pig3 ; 
var bird1;
var log1, log2 ; 

var bgImg ; 

function preload (){
    bgImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    //creating boxes
    box1 = new Box (630,310,70,70); 
    box2 = new Box (705,310,70,70);
    box3 = new Box (705,235,70,70);
    box4 = new Box (705,160,70,70);
    box5 = new Box (1000,310,70,70);
    box6 = new Box (925,310,70,70);
    box7 = new Box (925,235,70,70);
    box8 = new Box (925,160,70,70);
    //creating pigs
    pig1 = new Pig (800,310,50,50);
    pig2 = new Pig (840,310,50,50);
    //creating logs
    log1 = new Log (600,250,300,PI);
    log2 = new Log (1060,250,300,PI);
    //creating bird
    bird1 = new Bird(100,260,70.70);
   
}

function draw(){
    background(bgImg);
    Engine.update(engine);
  
  ground.display();
  box1.display();  
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  bird1.display();
}