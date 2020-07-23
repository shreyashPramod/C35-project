//Create variables here
var dog;
var happyDog;
var dataBase,foods;
var foodStock,foodS;
var food;
var feedButton;
var addFoodButton;
var fedTime;
var lastFed;
var foodObj;

function preload()
{
  dog_img=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png");
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

   database.ref('/').update({
     Food:x
     
   })
}

function setup() {
  database=firebase.database();
  
  createCanvas(500, 500);
  dog = createSprite(250,300,10,10);
  dog.addImage(dog_img);
  dog.scale=0.15;

  feed=createButton("Feed the dog");
  feed.position(700,90);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
  background("green");

  noStroke();
  textSize(15)
  fill("white")
  text("Food remaining:"+foodS,150,150);

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed : "+ lastFed%12 + "PM",350,30);
}

else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}

else{
  text("Last Feed : "+lastFed + "AM",350,30);
}
  dog.display();

  drawSprites();
}

function feedDog(){
  dog.addImage(dogImg1);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:houre()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foods
  })
}


