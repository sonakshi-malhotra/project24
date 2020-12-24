class Paper{constructor(x,y,radius){
    var options={
        density:1.2,
        restitution:0.5
    }
    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius
   Matter.World.add(world,this.body)
}
display(){
    circle(this.body.position.x,this.body.position.y,this.radius*2)
}
}
