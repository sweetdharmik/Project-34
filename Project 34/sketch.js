
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var playground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var leftSide;
var rightSide;
var ball;
var up;
var right;
var left;


//function preload()
//{
	
//}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700, 670, 1400, 20);
	leftSide = new Ground(1100, 600, 20, 160);
	rightSide = new Ground(850, 600, 20, 160);
	up = new Ground(700, 0, 1400, 10);
	right = new Ground(1400, 350, 10, 700);
	left = new Ground(0, 350, 10, 700);

	var ball_options={
		isStatic:false,
		restitution:0.1,
		friction: 0,
		density:0.01
		}
	//Create the Bodies Here.
  ball = Bodies.circle(200, 100, 30, ball_options);
  World.add(world, ball);
  fill("white");



    
	Engine.run(engine);
	//rectMode(CENTER);
	 
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  textSize(16);
  text("Press the up, down, right or left key to control the ball.", 50, 50);
  text("Try to land the ball in the basket.", 50, 70);
  text("Make sure to press reload to play again!", 1050, 50);



 //rect(ground.pos.x, ground.pos.y, 30, 20)

ground.show();
leftSide.show();
rightSide.show();
up.show();
right.show();
left.show();

ellipse(ball.position.x,ball.position.y,30);

if(keyDown(UP_ARROW)){
	keyPressed();
  }

  if(keyDown(RIGHT_ARROW)){
	keyPressedRight();
  }
  
  if(keyDown(LEFT_ARROW)){
	keyPressedLeft();
  }

  if(keyDown(DOWN_ARROW)){
	keyPressedLeft();
  }


drawSprites();


 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y: -0.05});
	  }
	

}

function keyPressedRight(){
	if(keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y: 0});
	  }
	

}

function keyPressedLeft(){
	if(keyDown(LEFT_ARROW)){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:-0.05, y: 0});
	  }
	

}

function keyPressedDown(){
	if(keyDown(DOWN_ARROW)){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y: 0.05});
	  }
	

}

function collide()
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,body.position.x,body.position.y);
          if(d<=80)
            {
              World.remove(engine.world,fruit);
               fruit = null;
               return true; 
            }
            else{
              return false;
            }
         }
}