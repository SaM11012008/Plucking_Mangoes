class slingshot {
    constructor(bodyA,pointB) {

        var opt = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:1
        }
        this.pointB = pointB;
        this.sling = Constraint.create(opt);
        World.add(world,this.sling);

    }


    display() {

        if(this.sling.bodyA){   
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

    fly()  {
        this.sling.bodyA=null
    }
}