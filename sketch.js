var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,zombie,zombieIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
    zombieIMG = loadImage("zombie.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-110, width,10);
	groundSprite.shapeColor=color(255);
	groundSprite.visible = false;

	zombie = createSprite(400,350,20,100);
	zombie.scale = 2.3;
	zombie.addImage(zombieIMG);
	zombie.depth = helicopterSprite.depth;
	helicopterSprite.depth = helicopterSprite.depth + 1;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8,isStatic:true});
	World.add(world, packageBody);
	zombie.depth = packageSprite.depth;
	packageSprite.depth = packageSprite.depth + 1;

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
    packageBody.velocityY = -2;
  }
}



