let r = 150;
let waves = []; let num = 20;
let step = 10;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  for(let i=0;i<num; i++){
      waves[i] = new Wave(i*step);
  }

}

function draw() {
  background(0);
  translate(width/2, height/2);
  noFill();
  //ellipse(0,0,r*2,r*2);
  
  for(let i=0; i<num; i++) {
    waves[i].display();
    waves[i].move();
  }
  
}
