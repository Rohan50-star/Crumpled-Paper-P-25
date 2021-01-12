const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,690,1600,30);
	
	d1 = new Dustbin(1300,665,170,20);
	d2 = new Dustbin(1210,615,20,200);
	d3 = new Dustbin(1390,615,20,200);

	paper = new Paper(100, 360, 20);
}


function draw() {
  background("lightSkyBlue");
  
  Engine.update(engine);

  ground.display();

  paper.display();

  d1.display();
  d2.display();
  d3.display();

  textFont('Papyrus');
  stroke("White");
  strokeWeight(10);
  textSize(60);
  text("Keep it Clean and Green !!! ", 450, 100);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:100, y:-100})
	}
}