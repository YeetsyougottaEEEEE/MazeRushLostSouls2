var Player;
var gamestate=1;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wal16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25;
var v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11;

var BulletGroup, villanbulletgroup, villangroup;



function setup() {
  createCanvas(displayWidth-50, displayHeight-200);
  Player=createSprite(280,500,20,20);
  Player.shapeColor="turquoise";
  BulletGroup=createGroup();
  villanbulletgroup=createGroup();
  villangroup=createGroup();

  //entrance walls
  wall1=createSprite((displayWidth-50)/2,20,displayWidth-80,10);
  wall2=createSprite(20,(displayHeight-200)/2,10,displayHeight-250);
  wall3=createSprite(120,538,200,10);
  //aaaaaaaa
  wall4=createSprite(220,493,10,100);
  wall5=createSprite(390,449,200,10);
  wall6=createSprite(485,493,10,80);
  wall7=createSprite(600,529,150,10);
  //exit walls
  wall8=createSprite(1296,(displayHeight-200)/4,10,250);
  wall9=createSprite(1296,450,10,200);
  // inner walls
  wall10=createSprite(100,200,10,200);
  wall11=createSprite(200,250,10,200);
  wall12=createSprite(200,350,100,10);
  wall13=createSprite(350,250,200,10);
  wall14=createSprite(500,250,10,200);
  wall15=createSprite(500,150,200,10);
  wall16=createSprite(800,150,10,150);
  wall17=createSprite(650,350,10,150);
  wall18=createSprite(650,280,80,10);
  wall19=createSprite(800,420,300,10);
  wall20=createSprite(1000,260,10,200);
  wall21=createSprite(1150,200,200,10);
  wall22=createSprite(1150,350,10,200);
  

  
  if(gamestate===1)
  {
  v1=createSprite(200,520,30,30);
  v1.shapeColor="orange"
  
  
  v1.setCollider("circle",0,0,70);

  v2=createSprite(465,469,30,30);
  v2.shapeColor="orange"

  v3=createSprite(180,330,30,30);
  v3.shapeColor="orange"

  v4=createSprite(480,170,30,30);
  v4.shapeColor="orange"

  v5=createSprite(670,300,30,30);
  v5.shapeColor="orange"

  v6=createSprite(670,400,30,30);
  v6.shapeColor="orange"

  v7=createSprite(1150,230,30,30);
  v7.shapeColor="orange"

  v8=createSprite(1276,40,30,30);
  v8.shapeColor="orange"

  v9=createSprite(200,520,30,30);
  v9.shapeColor="orange"

  v0=createSprite(200,520,30,30);
  v0.shapeColor="orange"

  v=createSprite(200,520,30,30);
  v.shapeColor="orange"

  v2.setCollider("circle",0,0,70);
  v3.setCollider("circle",0,0,70);
  v4.setCollider("circle",0,0,70);
  v5.setCollider("circle",0,0,70);
  v6.setCollider("circle",0,0,70);
  v7.setCollider("circle",0,0,70);
  v8.setCollider("circle",0,0,70);
  v9.setCollider("circle",0,0,70);
  v0.setCollider("circle",0,0,70);
  v.setCollider("circle",0,0,70);

  } 
}

function draw() {
  background("black");
  
  
  if(keyDown("UP_ARROW")){
    Player.y=Player.y-6
  }

  if(keyDown("DOWN_ARROW")){
    Player.y=Player.y+6
  }

  if(keyDown("RIGHT_ARROW")){
    Player.x=Player.x+6
  }

  if(keyDown("LEFT_ARROW")){
    Player.x=Player.x-6
  }

  Player.collide(wall1);
  Player.collide(wall2);
  Player.collide(wall3);
  Player.collide(wall4);
  Player.collide(wall5);
  Player.collide(wall6);
  Player.collide(wall7);
  Player.collide(wall8);
  Player.collide(wall9);
  Player.collide(wall10);
  Player.collide(wall11);
  Player.collide(wall12);
  Player.collide(wall13);
  Player.collide(wall14);
  Player.collide(wall15);
  Player.collide(wall16);
  Player.collide(wall17);
  Player.collide(wall18);
  Player.collide(wall19);
  Player.collide(wall20);
  Player.collide(wall21);
  Player.collide(wall22);
  
  PlayerBullet(Player.x,Player.y);
  Villianpewpew();


  drawSprites();
}

function PlayerBullet(x,y)
{
  if(keyDown("w") || keyDown("a") || keyDown("s")  || keyDown("d")){

  
  var bullet=createSprite(x,y,1,5);
  bullet.shapeColor="red";
  var BulletGroup=createGroup();
  BulletGroup.add(bullet);
  
  if(keyDown("w")){
    bullet.velocityY=-10
  }

  if(keyDown("a")){
    bullet.velocityX=-10
  }

  if(keyDown("s")){
    bullet.velocityY=+10
  }

  if(keyDown("d")){
    bullet.velocityX=+10
  }
  
  
  

  }      

}
function Villianpewpew()
{

  if(v1.isTouching(Player) || v2.isTouching(Player) || v3.isTouching(Player) || v4.isTouching(Player) || v5.isTouching(Player) || v6.isTouching(Player) || v7.isTouching(Player) || v8.isTouching(Player) || v9.isTouching(Player) || v0.isTouching(Player) || v.isTouching(Player))
  {
    if(v1.isTouching(Player)){
      var VillianBullet=createSprite(v1.x,v1.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v2.isTouching(Player)){
      var VillianBullet=createSprite(v2.x,v2.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v3.isTouching(Player)){
      var VillianBullet=createSprite(v3.x,v3.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v4.isTouching(Player)){
      var VillianBullet=createSprite(v4.x,v4.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v5.isTouching(Player)){
      var VillianBullet=createSprite(v5.x,v5.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v6.isTouching(Player)){
      var VillianBullet=createSprite(v6.x,v6.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v7.isTouching(Player)){
      var VillianBullet=createSprite(v7.x,v7.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v8.isTouching(Player)){
      var VillianBullet=createSprite(v8.x,v8.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v9.isTouching(Player)){
      var VillianBullet=createSprite(v9.x,v9.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v.isTouching(Player)){
      var VillianBullet=createSprite(v.x,v.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    if(v0.isTouching(Player)){
      var VillianBullet=createSprite(v0.x,v0.y,1,5);
      VillianBullet.velocityX=random(-12,12);
      VillianBullet.velocityY=random(-12,12);
    }
    
  }
  
  
}

