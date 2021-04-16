var canvas;
var music;

var surface1,surface2,surface3,surface4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,400);

    //create 4 different surfaces

    surface1 = createSprite(60,390,140,20); 
    surface1.shapeColor="red";
    
    surface2 = createSprite(210,390,140,20); 
    surface2.shapeColor="green";

    surface3 = createSprite(365,390,150,20); 
    surface3.shapeColor="blue";

    surface4 = createSprite(525,390,150,20); 
    surface4.shapeColor="orange";

    //create box sprite and give velocity
    ball = createSprite(random(20,650),100,20,20);
    ball.shapeColor = "white";
    ball.velocityY = 4;
    ball.velocityX = 3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

  
    //add condition to check if box touching surface and make it box
    if (ball.isTouching(surface1) && ball.bounceOff(surface1)){
        music.play();
       
        ball.shapeColor = surface1.shapeColor;
    }
    else if(ball.isTouching(surface2) && ball.bounceOff(surface2)){
        ball.shapeColor = surface2.shapeColor;
    }
    else if(ball.isTouching(surface3) && ball.bounceOff(surface3)){
        ball.setVelocity(0,0);
        music.stop();
        ball.shapeColor = surface3.shapeColor;
    }
    else if(ball.isTouching(surface4) && ball.bounceOff(surface4)){
        ball.shapeColor = surface4.shapeColor;
    }

    drawSprites();
}
