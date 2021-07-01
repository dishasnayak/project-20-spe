//DESIGN OF ALGORITHM
//variables 
var car,wall

//preload

//setup
function setup() {
  createCanvas(400,400);
  wall = createSprite(350,200,50,250)
  car = createSprite(100,300,70,50)
  
  
  edges=createEdgeSprites();
  
  wall.shapeColor = "blue"
  car.shapeColor ="orange"

  wall.debug = true
  car.debug = true
}

//draw
function draw() {
  background(5); 

 
  car.x = mouseX
  car.y = mouseY
 

if(wall.x - car.x < wall.width/2 +car.width/2
  && car.x - wall.x < wall.width/2 +car.width/2
  && wall.y - car.y < wall.height/2+car.height/2
  && car.y - wall.y < wall.height/2+car.height/2)
  {
  wall.shapeColor = "purple"
  car.shapeColor ="orange"

}
else{
  wall.shapeColor = "blue"
  car.shapeColor ="pink"
}

  drawSprites();
}