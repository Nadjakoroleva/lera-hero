let seaworld;
let hero;
let food;
let foodX = 0;
let foodY = 0;
let x = 0;
let y = 0;
let dx = 5;
let dy = 5;
let health = 0;

function setup() {
  createCanvas(1023, 894);
  foodX = random(100, 700);
  foodY = random(100, 700);
}

function preload() {
  // preload() runs once
  hero = loadImage("hero.png");
  food = loadImage("lig.jpg");
  seaworld = loadImage("seaworld.jpg");
}

function draw() {
  background(seaworld);
  seaworld.resize(0, 200);
  hero.resize(0, 200);
  image(hero, x, y);
  food.resize(0, 75);
  image(food, foodX, foodY);
  noStroke();
  fill("#76FF00");
  health = 100 - second();
  rect(width - 130, 30, health, 30);
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  } else if (keyCode == LEFT_ARROW) {
    x = x - dx;
  } else if (keyCode == DOWN_ARROW) {
    y = y + dy;
  } else if (keyCode == UP_ARROW) {
    y = y - dy;
  }
}
