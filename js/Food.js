class Food{
    constructor(){

      var foodStock,lastFed;
      this.image=loadImage("images/Milk.png");
 }

getFoodStock(){

}

updateFoodStoke(){

}

deductFood(){

}

 display(){
     imageMode(CENTER);
     this.image(this.image,720,220,70,70);

     if(this.getFoodStock!=0){
         for(var i=0;i<this.foodStock;i++){
             if(i%10==0){
                 x=0;
                 y=y+50;
             }
             this.image(this.image,x,y,50,50);
             x=x+30;
         }
     }
 }
}