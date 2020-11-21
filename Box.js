class Box{

  constructor(){
  var options ={
 isStatic:true
  }
 
this.body=Bodies.rectangle(400,70,width,height,options)
this.width = width;
this.height = height;
World.add(world.this.body);

  }

display(){
var pose=this.body.position;
fill("red");
rect(pose.x,pose.y,this.width,this.height)

}


}




