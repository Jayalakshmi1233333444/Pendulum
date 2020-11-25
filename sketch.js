
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,ground,rope1,bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(100,200,50);
bob2=new Bob(200,200,50);
bob3=new Bob(300,200,50);
bob4=new Bob(400,200,50);
bob5=new Bob(500,200,50);
ground=new Ground(320,140,400,20);  
rope1=new Rope(bob1,ground,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
rope1.display();
  ground.display();
 
}



