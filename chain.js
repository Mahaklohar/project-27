class chain{
    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;


        var options ={
            bodyA: bodyA,
            //bodyB: bodyB,
            pointB: {x: bodyB.position.x- this.offsetX, y: bodyB.position.y-this.offsetY},
            
            length: 300,
            stiffness: 0.2
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){

        var aPos = this.chain.bodyA.position;
        var bPos = this.chain.pointB;

        strokeWeight(3);
        line(aPos.x, aPos.y, bPos.x, bPos.y);

    }
}