class Bob{
    constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
          
      }  
      this.r=r;
     this.body=Bodies.circle(x,y, this.r/2,options) 
    
      World.add(world,this.body);
    }
    display(){
      console.log("Is the bob created");
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      //rectMode(CENTER)
      strokeWeight(4);
      fill("purple");
      ellipse(0,0,this.r,this.r);
      pop() ;

    }
    
}