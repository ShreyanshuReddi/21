
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

let engine;
let world;

var groundObj;
var leftSide;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj =new ground(width/2,670,width,20);
	leftSide= new ground(1100,600,20,120)


	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	//Create the Bodies Here.



	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)
  
	ellipseMode(RADIUS)
	rectMode(CENTER);
  
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  groundObj.show()
  leftSide.show()

  drawSprites();

  ellipse(ball.position.x,ball.position.y,20)
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
	}
}
