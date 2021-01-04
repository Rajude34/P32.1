const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0
var engine, world;

function preload() {
polygon_img = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world

    g1 = new Ground(400,300,300,20)
    b1 = new Box(300,275,30,40)
    b2 = new Box(330,275,30,30)
    b3 = new Box(360,275,30,40)
    b4 = new Box(390,275,30,40)
    b5 = new Box(420,275,30,40)
    b6 = new Box(450,275,30,40)
    b7 = new Box(480,275,30,40)

    b8 = new Box(330,235,30,40)
    b9 = new Box(360,235,30,40)
    b10 = new Box(390,235,30,30)
    b11 = new Box(420,235,30,40)
    b12 = new Box(450,235,30,40)

    b13 = new Box(360,195,30,40)
    b14 = new Box(390,195,30,40)
    b15 = new Box(420,195,30,40)
    b16 = new Box(390,165,30,40)

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingShot = new Slingshot(this.ball,{x:100,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
textSize(20)
text("Score: "+score,width-100,50)
g1.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()
b13.display()
b14.display()
b15.display()
b16.display()
b1.score()
b2.score()
b3.score()
b4.score()
b5.score()
b6.score()
b7.score()
b1.score()
b8.score()
b9.score()
b10.score()
b11.score()
b12.score()
b13.score()
b14.score()
b15.score()
b16.score()
fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.ball);
    }
  }
  