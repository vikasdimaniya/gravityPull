function Rock() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.distance=0;
    this.radius = random(10,20);
    this.density=random(.5,1.5);
    this.density_color = map(this.density, .5, 1.5, 50, 255);
    this.mass = (4/3)*pow(this.radius,3)*this.density;
    this.x_velocity=0;
    this.y_velocity=0;
    this.velocity;
    this.show = function () {
       noStroke(); 
       fill(this.density_color,50,50); ellipse(round(this.x),round(this.y),this.radius,this.radius);
    }
    this.bounds = function(){
        if(this.x<0){
            this.x=5;
            this.x_velocity*=-1;
        }
        if(this.x>width) {
            this.x=width;
            this.x_velocity*=-1;
        }
        if(this.y<0){
            this.y=5;
            this.y_velocity*=-1;
        }
        if(this.y>height){
            this.y=height;
            this.y_velocity*=-1;
        }
        this.velocity=sqrt(sq(this.x_velocity)+sq(this.y_velocity));
        if(this.velocity>30)this.velocity/=10;
    }
    this.gravityForce = function(){
        this.x_distance=sq(mouseX-this.x);
        this.y_distance=sq(mouseY-this.y);
        this.distance = this.x_distance+this.y_distance;
        this.gravity = this.mass/this.distance;
        this.y_gravity = (this.gravity)*this.y_distance/this.distance;
        this.x_gravity = (this.gravity)*this.x_distance/this.distance;
        if(this.distance>200){
            if(this.x>mouseX) {
                this.x_velocity -= this.x_gravity;
                this.x += this.x_velocity;
            }
            if(this.x<mouseX) {
                this.x_velocity += this.x_gravity;
                this.x += this.x_velocity;
            }
            if(this.y>mouseY){
                this.y_velocity -= this.y_gravity;
                this.y += this.y_velocity;
            }
            if(this.y<mouseY){
                this.y_velocity += this.y_gravity;
                this.y += this.y_velocity;
            }
        }
        else{
            this.x_velocity=-10;
            this.y_velocity=-10;
        }
        
    }
    this.update = function () {
        this.gravityForce();
        this.bounds();
    }
}