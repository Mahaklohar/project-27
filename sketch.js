
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(250, 550, 15);
	ball2 = new Ball(310, 550, 15);
	ball3 = new Ball(370, 550, 15);
	ball4 = new Ball(420, 550, 15);
	ball5 = new Ball(550, 550, 15);

	var platOptions ={
		isStatic: true
	}
	platform = Bodies.rectangle(380, 200, 400, 20, platOptions)
	World.add(world, platform);

	chain1 = new chain(ball1.body, platform, 100, 0);
	chain2 = new chain(ball2.body, platform, 50, 0 );
	chain3 = new chain(ball3.body, platform, 0, 0 );
	chain4 = new chain(ball4.body, platform, -50, 0 );
	chain5 = new chain(ball5.body, platform, -100, 0);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("skyblue");
  fill("green")
  rect(platform.position.x, platform.position.y, 400, 40);

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  drawSprites();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -75, y: 100})
	}
}