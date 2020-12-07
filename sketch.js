var MyPlane,myplaneIMG;
var Fbullet,Fbulletimg;
var upper;
var enemyG;
var enemy1img,enemy2img,enemy3img;
var blastimg;

function preload(){

  backgroundImg = loadImage("sky.jpg");
  myplaneIMG = loadImage("123.png");
  enemy1img = loadImage("ENEMY1.png");
  enemy2img = loadImage("ENEMY2.png");
  enemy3img = loadImage("8989.png");
  Fbulletimg = loadImage("ijkl.png");
  blastimg = loadImage("blast.png");

} 
function setup() {

  createCanvas(1300,570);

  upper = createSprite(625,350,1250,10);
  upper.visible = false;

  enemyG = new Group();

  MyPlane = createSprite(200,470,20,20);
  MyPlane.addImage(myplaneIMG);
  MyPlane.scale = 0.54;

}

function draw() {
  background(backgroundImg);  

  edges = createEdgeSprites();
  MyPlane.collide(edges[0]);
  MyPlane.collide(edges[1]);
  MyPlane.collide(edges[3]);

  MyPlane.collide(upper);
  MyPlane.setCollider("circle",0,0,20);

  enemies();
  enemiesL();
  enemiesR();

  if(keyWentDown("t")){
    MyPlane.scale -= 0.05;
  }
  if(keyWentUp("t")){
    MyPlane.scale = MyPlane.scale;
  }
  if(keyWentDown("g")){
    MyPlane.scale += 0.05;
  }
  if(keyWentUp("g")){
    MyPlane.scale = MyPlane.scale;
  }
  

  if(keyWentDown(LEFT_ARROW)){
    MyPlane.velocity.x = -7;
  }
  if(keyWentUp(LEFT_ARROW)){
    MyPlane.velocity.x = 0;
  }
  if(keyWentDown(RIGHT_ARROW)){
    MyPlane.velocity.x = 7;
  }
  if(keyWentUp(RIGHT_ARROW)){
    MyPlane.velocity.x = 0;
  }
  if(keyWentDown(DOWN_ARROW)){
    MyPlane.velocity.y = 7;
  }
  if(keyWentUp(DOWN_ARROW)){
    MyPlane.velocity.y = 0;
  }
  if(keyWentDown(UP_ARROW)){
    MyPlane.velocity.y = -7;
  }
  if(keyWentUp(UP_ARROW)){
    MyPlane.velocity.y = 0;
  }

  if(keyWentDown("D")){
    Fbullet = createSprite(MyPlane.x+10,MyPlane.y-40,20,20);
    Fbullet.velocity.y = -16
    Fbullet.addImage(Fbulletimg);
    Fbullet.scale = 0.02;
    if(enemyG.isTouching(Fbullet)){
      enemyG.setVelocityYEach = 0;
      enemyG.setLifetimeEach = 30;
      Fbullet.destroy();
    }
  }
  if(keyWentDown("A")){
    Fbullet = createSprite(MyPlane.x-10,MyPlane.y-40,20,20);
    Fbullet.velocity.y = -16;
    Fbullet.addImage(Fbulletimg);
    Fbullet.scale = 0.02;
    if(enemyG.isTouching(Fbullet)){
      enemyG.setVelocityYEach = 0;
      enemyG.setLifetimeEach = 30;
      Fbullet.destroy();
  }
}
drawSprites();
}
function enemies(){
  if(frameCount%175===0){
    enemy = createSprite(0,-70,10,10);
    enemy.x = random(100,1300)
    enemy.velocity.y = 2.5;
    enemy.setCollider("circle",0,0,20);

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:enemy.addImage(enemy1img);
             enemy.scale = 0.32;
      break;
      case 2:enemy.addImage(enemy2img);
             enemy.scale = 0.21;
      break;
      case 3:enemy.addImage(enemy3img);
             enemy.scale = 0.1;
      break;
      default:break;
    }
    enemyG.add(enemy);
  }
}
function enemiesL(){
  if(frameCount%219===0){
    enemy = createSprite(0,0,10,10);
    enemy.rotation = 315;
    enemy.velocity.y = 2.5;
    enemy.velocity.x = 2.5;
    enemy.setCollider("circle",0,0,20);

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:enemy.addImage(enemy1img);
             enemy.scale = 0.37;
      break;
      case 2:enemy.addImage(enemy2img);
             enemy.scale = 0.26;
      break;
      case 3:enemy.addImage(enemy3img);
             enemy.scale = 0.15;
      break;
      default:break;
  }
  enemyG.add(enemy);
}
}

function enemiesR(){
  if(frameCount%129===0){
    enemy = createSprite(1300,0,10,10);
    enemy.rotation = 45;
    enemy.velocity.y = 2.5;
    enemy.velocity.x = -2.5;
    enemy.setCollider("circle",0,0,20);

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:enemy.addImage(enemy1img);
             enemy.scale = 0.37;
      break;
      case 2:enemy.addImage(enemy2img);
             enemy.scale = 0.26;
      break;
      case 3:enemy.addImage(enemy3img);
             enemy.scale = 0.15;
      break;
      default:break;
  }
  enemyG.add(enemy);
}
}