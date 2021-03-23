const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain;

var lightning, lightningAni;

var dude, dudeAni;

function preload(){
    
    dudeAnni = loadAnimation('walking_1.png','walking_2.png','walking_3.png',
    'walking_4.png','walking_5.png','walking_6.png','walking_7.png',
    'walking_8.png');

}

function setup(){
var canvas = createCanvas(500,1000);
engine = Engine.create();
world = engine.world;

dude = createSprite(250,500,50,50);
dude.addAnimation('walking', dudeAni);
    
}

function draw(){
    background('black');
    Engine.update(engine);

    drawSprites();
}   


