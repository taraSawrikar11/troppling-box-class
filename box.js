class Box{
    constructor(x, y, width, height){
        var box_options ={
            restitution: 1.0
        }
    
        this.body = Bodies.circle(200,100,20, box_options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("green");
        rectMode(CENTER);
        rect(pos.x,pos.y,50,80); 
    }
}