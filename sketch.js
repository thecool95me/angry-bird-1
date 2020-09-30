const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var engine,world;
var ground
var box1,box2;
var ground;

function setup() {
 var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(450,320,30,30);
  box2 = new Box(650,320,30,30);
  box3 = new Box(450,235,30,30);
  box4 = new Box(650,235,30,30);
  box5 = new Box(550,165,30,30);


  ground = new Ground(400,350,800,30);
  pig1 = new Pig(550,320)
  pig2 = new Pig(550,220)
  bird1 = new Bird(200,220)
  log1 = new Log(550,270,300,PI/2)
  log2 = new Log(550,215,300,PI/2)
  log3 = new Log(525,150,100,PI/7)
  log4 = new Log(565,150,100,-PI/7)







}

function draw() {
  background("black");
  Engine.update(engine) 
 box1.display();
 box2.display();
 ground.display();
 pig1.display();
 log1.display();
 box3.display();
 box4.display();
 log2.display();
 pig2.display();
 box5.display();
 log3.display();
 log4.display();
 bird1.display();










 
}