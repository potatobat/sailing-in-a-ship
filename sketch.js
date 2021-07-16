
function preload()
{
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation(shipImg1,shipImg2,shipImg3,shipImg4)
spriteName.addImage(seaImg)
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 if(sea.x < 0){
   sea.x = sea.width/2;
 }
}