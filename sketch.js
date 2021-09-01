var trex , trex_running, edges;
var groundImage;
var ground
function preload(){
  //pre-load images
    trex_running = loadAnimation("Runner-1.png","Runner-2.png");
       groundImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  trex = createSprite(50,170,20,50)
  trex.addAnimation= ("running, trex_running");
  edges= createEdgeSprites()

}

function draw() {
  background(0);

}
