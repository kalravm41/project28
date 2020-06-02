var ground,paper,log1,log2,log3,dustbinImg,launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
//	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,600,60);
	ground = new Ground(600,700,1800,20);
	log1 = new Ground(850,620,20,150);
	log2 = new Ground(1050,620,20,150);
	log3 = new Log(950,680,180,20);
    launcher = new Slingshot(paper.body,{x:600,y:200});
	//log3 = loadImage(dustbinimg);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 // Engine.update(engine);
  paper.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  //keypressed();
 // drawSprites();
 
}
function mouseDragged(){
		Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
	
}
function mouseReleased(){
    launcher.fly();
}


