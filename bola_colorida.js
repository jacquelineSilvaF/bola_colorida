//Declarar um conjunto de variáveis para utilizar nas funções//
let ball = {
  x: 200,
  y: 100, 
  xSpeed: 5,
  ySpeed: 5
}


let r, g, b;

//Função que muda a cor da bola
function ballcolor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}


function setup() {
  createCanvas(1000, 600);
  ballcolor();
}

function draw() {
  
  background(0);
  
  ballImage();
  move();
  bounce();
   
}

//Função que faz o movimento diagonal da bola
function move() {
  
  ball.x = ball.x + ball.xSpeed;
  ball.y = ball.y + ball.ySpeed;
  
}

//Função que faz a bola voltar quando bate o limite do canvas
function bounce () {
  if (ball.x + 45 == width || ball.x == 45) {
    
    ball.xSpeed = ball.xSpeed * -1;
    
    ballcolor();
    
  }
  
  if (ball.y + 45 == height || ball.y == 45) {
    
    ball.ySpeed = ball.ySpeed * -1;
    
    ballcolor();
    
  }
}

//Função que desenha a bola
function ballImage() {
  
  fill(r, g, b);
  noStroke();
  ellipse(ball.x, ball.y, 90);
  
}