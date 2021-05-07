class Box{
    constructor(x,y){

    var square = {
       density : 1,
       friction :1 ,
       restitution : 1

    }

    this.body = Bodies.rectangle(x,y,85,85,square);
    this.width=85;
    this.height=85;
    World.add(myWorld,this.body);
    }

display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("azure");
    stroke("darkblue");
    strokeWeight(4.5);
    rect(0,0,85,85);
    pop();

}
}
