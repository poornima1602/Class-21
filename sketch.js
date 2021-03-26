var car,wall,wall1;



function setup() {
  createCanvas(1350,800);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor="pink";
  

  wall=createSprite(1050,200,10,500);
  wall.shapeColor="gray";
  
  wall1=createSprite(250,200,10,500);
  wall1.shapeColor="gray";

  car.velocityX=5;
}
function draw() {
  background("black"); 
  
  if(isTouching(car,wall1)){
    car.shapeColor="red";
  }
 else{
   car.shapeColor="white";
 }
if(BounceOff(car,wall)){
  car.velocityX=-1;
}

if(Bounce(car,wall)){
  car.velocityX=-1;
  wall.velocityX=1;
}
  drawSprites();
  
}


