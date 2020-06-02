class Paper{
    constructor(x,y,radius){
        var options = {
           // isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.image = loadImage("paper.png");
       this.body =  Bodies.circle(x,y,radius,options);
      this.radius = radius;
     // this.radius = radius;
     // this.radius = radius;
     // this.image = loadImage("paper.png");
      World.add(world,this.body);
     // this.image = loadImage("paper.png");
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      fill("white");
      ellipse(pos.x,pos.y,this.radius,this.radius);
      image(this.image, pos.x,pos.y , 100,100);
    }
  };