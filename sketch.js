
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,bob2,bob3,bob4,bob5;
var rope,rope2,rope3,rope4,rope5;
var bobDiameter
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	
	startBobPositionX=width/2;
	startBobPositionY=height/4+200;
	bob=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	roof=new Roof(300,50)
	//bob=new Bob(30,250,40)
	//bob2=new Bob(80,250,40)
	//bob3=new Bob(130,250,40)
	//bob4=new Bob(180,250,40)
	//bob5=new Bob(330,300,40)
	rope=new Rope(bob.body,roof.body,-bobDiameter*2,0)
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0)
	rope3=new Rope(bob3.body,roof.body,0,0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1,0)
	//rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

roof.display();
fill(0)
text(mouseX+","+mouseY,mouseX,mouseY)
rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
keyPressed();
  drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob.body,bob.body.position,{x:-45,y:-55});

	}
}

