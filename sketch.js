const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;
var ball3;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options ={
        isStatic: true
    }
    
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    
    World.add(world,ground);
    
    var ball_options = {
        restitution: 1
    }
    
    ball = Bodies.circle(99.9999,100,20,ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(100,50,20,ball_options);
    World.add(world,ball2);

    ball3 = Bodies.circle(101.00001,200,20,ball_options);
    World.add(world,ball3);




}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
   
    circle(ball.position.x, ball.position.y,40);
    circle(ball2.position.x, ball2.position.y,40);
    circle(ball3.position.x, ball3.position.y,40);
}


