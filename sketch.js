var car, wall, speed, weight, deformation;


function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  car = createSprite(300, 200, 20, 20);
  wall = createSprite(1500, 200, 60, height/2);  

}

function draw() {
  background(0,0,0); 
   
  car.velocityX = speed;

  if(car.x - wall.x <= car.width/2 + wall.width/2 
    /*wall.x - car.x <= car.width/2 + wall.width/2 &&
    car.y - wall.y <= car.height/2 + wall.height/2 &&
    wall.y - car.y <= car.height/2 + wall.height/2*/){

      car.shapeColor="red";
      wall.shapeColor="red";

    }else{

      car.shapeColor="blue";
      wall.shapeColor="blue";

    }
    
deformation = 0.5*weight*speed*speed/2250;

if(deformation < 100){

  car.shapeColor("green");
  car.visible = false;
  wall.visible = false;

  stroke("red");
  textSize("24");
  text("good", 600, 20);
  
}else if(100 < deformation > 180 ){

  car.shapeColor("yellow");
  car.visible = false;
  wall.visible = false;
  
  stroke("red");
  textSize("24");
  text("average", 600, 20);

} else if(180> deformation){

  car.shapeColour("red");
  car.visible = false;
  wall.visible = false;

  stroke("red");
  textSize("24");
  text("lethal", 600, 20);

}

  drawSprites();
}