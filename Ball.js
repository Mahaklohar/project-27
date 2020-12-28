class Ball {
    constructor(x, y, radius){
        var options ={
            isStatic: false,
            restitution: 1.3,
            friction: 1,
            density: 1.5
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body) 
    }

    display(){
        var pos = this.body.position;
        push()
        
        stroke("Black");
        strokeWeight(3)
        fill ("red")
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
        pop()
    }
}