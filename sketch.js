
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball = new Paper(150, 0, 20);
	Low = new Dustbin(600, 500, 200, 20);
	Left = new Dustbin(510, 460, 20, 100);
	Right = new Dustbin(690, 460, 20, 100);
	stand = new Ground(400, 515, 800, 30);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();

  drawSprites();
  ball.display();
  Low.display();
  Left.display();
  Right.display();
  stand.display();
}


function keyPressed() {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position,{x:1, y:-2}); 		
        Matter.Body.applyForce(ball.body, ball.body.position,{x:1, y:1});
		
	}
}
