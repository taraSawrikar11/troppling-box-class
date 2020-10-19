//blueprints are called class in programming- before creating obj we create blueprint
class Ground{
    //properties- visible, how obj looks like
    constructor(x, y, width, height){
        //special member fun of class to store properties
        var ground_options ={
            //it does not fall due to gravity because as soon as we create body gravity is given to it by physics engine module
            isStatic: true
        }
        this.body = Bodies.rectangle(200,390,200,20,ground_options);
        World.add(world,this.body);
    }

    //functions- task we can perform using obj
    display(){
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,400,20);
    }
}