class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 1.2,
            length : 250,
               

        }
    this.pointB = pointB;
    this.sling = Constraint.create(options)
World.add (world,this.sling)
}
display() {
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
    
push();
stroke("grey");
strokeWeight(3);
line(pointB.x,pointB.y,pointA.x,pointA.y);
pop();
    }
}


}