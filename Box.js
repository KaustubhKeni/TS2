class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    //shapeColor.color("yellow");
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display()
     }
     else{
       World.remove(world,this.body);
       push()
     this.Visibility=this.Visibility-5;
     tint(250,this.Visibility);
     image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop()
     }
}
};
