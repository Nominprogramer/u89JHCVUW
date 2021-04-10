class rain{
    constructor(x,y){

        this.radius = 5;

        this.body = Bodies.circle(x,y,this.radius,{
            restitution : 0.1,
            friction : 0.05
        });




    }

    randomPos(){
        Matter.Body.setPosition(this.body,{
            x: random(50,350),

            y: random(500,700)

        })
    }

    display(){
        let pos = this.body.position
        fill("skyblue")
        ellipse(pos.x,pos.y,this.radius,this.radius+1);
    }
}