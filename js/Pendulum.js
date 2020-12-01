
class Pendulum {
    constructor(x,y, radius){    
    var options ={
        isStatic: false,
        restitution: 0.9,
        friction: 1.0,
        density: 1.2
     }
     this.x =x;
     this.y=y;
     this.radius=radius;
     this.body = Bodies.circle(this.x,this.y,(this.radius)/2, options);
     this.color=color(random(0, 255), random(0, 255), random(0, 255));
     World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(3)
    stroke("white");
    fill(this.color);
    ellipse(0,0, this.radius,this.radius);
    pop();
  }
};