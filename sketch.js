
function preload() {
    bg=loadImage("images/garden.png")
    tomImage1=loadAnimation("images/cat1.png")
    jerryImage1=loadAnimation("images/mouse1.png")
    tomImage2=loadAnimation("images/cat2.png")
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870,600)
    tom.addAnimation("cat",tomImage1)
    tom.scale=0.2

    jerry = createSprite(200,600)
    jerry.addAnimation("mouse",jerryImage1)
    jerry.scale=0.2


}

function draw() {

    background(bg)

    drawSprites();
}


function keyPressed(){

  if(keyCode==LEFT_ARROW){
      tom.velocityX=-5
      tom.addAnimation("tomRunning",tomImage2);
      tom.changeAnimation("tomRunning")
      
  }


}
