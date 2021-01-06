
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box1,box2,box3;
var ground;
var ball;

function setup() {
	createCanvas(2000, 400);


	engine = Engine.create();
	world = engine.world;

	

	box1= new Box(1900,370,120,10);
	box2= new Box(1840,340,10,60);
	box3= new Box(1960,340,10,60);
	ground= new Ground(1000,380,2000,10);
	ball= new Ball(200,265,10);
	


	Engine.run(engine);
  
}


function draw() {
 
  background(0);

  keyPressed();
  
  box2.display();
  box1.display();
 box3.display();
 ground.display();
 ball.display();
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10});
	}
}

