const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;
//creting object takes new keyword , name of blueprint, () for invoking constructor
    ground = new Ground(200, 600, 1300, 600);

    box = new Box(400, 200, 50, 80);

    console.log(ground);
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    box.display();
}