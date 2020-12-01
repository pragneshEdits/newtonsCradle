

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var stick;
var leaf,leaf2;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000,700);

	engine = Engine.create();
	world = engine.world;
	
	var pendulumDiameter = 70;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	pendulum1 = new Pendulum(posX - pendulumDiameter*2, posY, pendulumDiameter);
	pendulum2 = new Pendulum(posX - pendulumDiameter,posY, pendulumDiameter);
	pendulum3 = new Pendulum(posX,posY,pendulumDiameter);
	pendulum4 = new Pendulum(posX +  pendulumDiameter, posY, pendulumDiameter);
	pendulum5 = new Pendulum(posX + pendulumDiameter * 2, posY, pendulumDiameter);

	roof = new Roof(width/2,100, 800, 10);
	stick= new Stick(0,1,1300,200);
	leaf = new Bamboo(0,60,500,400);
	leaf2 = new Bamboo(500,60,500,400);
	
	sling1 = new Rope(pendulum1.body,roof.body,-pendulumDiameter*2,0);
	sling2 = new Rope(pendulum2.body,roof.body,-pendulumDiameter*1,0);
	sling3 = new Rope(pendulum3.body,roof.body,0,0); 
 	sling4 = new Rope(pendulum4.body,roof.body,pendulumDiameter*1,0); 
	sling5 = new Rope(pendulum5.body,roof.body,pendulumDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  roof.display();
  stick.display();
  leaf.display();
  leaf2.display();

  drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(pendulum1.body,pendulum1.body.position,{x:-70,y:-60}); } 

	if(pendulum1.isTouching("leaf")){
		Matter.Body.applyForce(leaf.body,leaf.body.position,{x:-70,y:-60});
	}
if (keyCode === DOWN_ARROW) 
	{ Matter.Body.applyForce(pendulum5.body,pendulum5.body.position,{x:70,y:60}); } 
} 

	function drawLine(constraint) { 
		pendulumPosition = constraint.bodyA.position 
		roofPosition = constraint.bodyB.position 
		roofBodyOffset = constraint.pointB; 
		roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
		roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
		line(pendulumBodyPosition.x, pendulumBodyPosition.y, roofBodyX, roofBodyY); 
	}

	function mouseDragged(){
		Matter.Body.setPosition(pendulum1.body,{x: mouseX,y: mouseY});
		

	}




