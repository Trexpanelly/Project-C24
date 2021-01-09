class Paper {
    constructor(x, y, d) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.x = x;
    this.y = y;
    this.d = d;
    this.body = Bodies.circle(this.x, this.y, this.d/2, options);
    World.add(world, this.body);
}


display() {
    
    var papos = this.body.position;

    push();
    translate(papos.x, papos.y);
    ellipseMode(RADIUS);
    strokeWeight(1);
    fill(255, 0, 255);
    ellipse(0, 0, this.d, this.d);
    pop();
}
}