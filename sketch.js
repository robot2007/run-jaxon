var pathImg,jaxonImg,path,jaxon,left_boundary,right_boundary,powerImg

function preload(){
  //pre-load images
  jaxonImg=loadImage("Runner-1.png","Runner-2.png")
  pathImg=loadImage("path.png")
  powerImg=loadImage("power.png")
  }

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
jaxon=createSprite(180,340,50,170);
jaxon.addAnimation("running",jaxonImg);
left_boundary=createSprite(0,300,100,600);
right_boundary=createSprite(390,300,80,600);
right_boundary.visible=false;
left_boundary.visible=false;

}


function draw() {
background(0);  
textSize(10)
text("0",20,230)
path.velocityY=5
jaxon.x=World.mouseX
if(path.y>400){
path.y=height/2
}
jaxon.collide(left_boundary)
jaxon.collide(left_boundary)
edges=createEdgeSprites()
jaxon.collide(edges[3])
drawSprites()

}
