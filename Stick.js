
    class Stick {
        constructor(x,y,width,height) {
          var options = {
              isStatic: true
          }
          this.width = width;
          this.height = height;
          this.x=x;
          this.y=y;
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.image=loadImage("images/stick.png");
          
          World.add(world, this.body);
        
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          rectMode(CENTER);
          strokeWeight(4);
          stroke("yellow");
          fill(255,15,77);
          image(this.image,0,0, this.width, this.height);
          pop();
        }
      };