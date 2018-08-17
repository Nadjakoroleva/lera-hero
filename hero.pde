PImage seaworld;
PImage hero;
PImage food;
float foodX, foodY;
int x, y;
int dx = 5;
int dy = 5;
int health;
void setup() {
  size(1023,894);
  hero = loadImage("hero.png");
  foodX = random(100, 700);
  foodY = random(100, 700);
  food = loadImage("lig.jpg");
  seaworld = loadImage("seaworld.jpg");
}

void draw() {
  background(seaworld);
  seaworld.resize(0,200);
  hero.resize(0, 200);
  image(hero, x, y);
  food.resize(0, 75);
  image(food, foodX, foodY);
  noStroke();
fill(#76FF00);
health = 100 - second();
rect(width - 130 ,30 , health , 30 );
}
void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + dx;
  } else if (keyCode == LEFT ) {
    x = x - dx ;
  } else if (keyCode == DOWN ) {
    y = y + dy;
  } else if (keyCode == UP ) {
    y = y - dy;
  }
}