const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,490,1200,10);
    box1 = new Box(700,400,60,60);
    box2 = new Box(900,400,60,60);
    pig1 = new Pig(800,400,40,40);
    log1 = new Log(800,340,300,PI/2);
    box3 = new Box(700,250,60,60);
    box4 = new Box(900,250,60,60);
    pig2 = new Pig(800,250,40,40);
    log2 = new Log(800,210,300,PI/2);
    box5 = new Box(800,180,60,60);
    log3 = new Log(750,180,100,PI/7);
    log4 = new Log(850,180,100,-PI/7);
    bird = new Box(200,400,50,50);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
   box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}