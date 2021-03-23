class Drops{
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0 
        }
        this.body = Matter.Bodies.circle(x, y, 15, options);
        this.radius = 15;
        
        world.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill('red');
      circle(0, 0, this.radius);
      pop();
    }
    
    for(var i=0; i<maxDrop; i++){
        drops.ush(new creatDrop(random(0,400), random(0,400)));
    }
};