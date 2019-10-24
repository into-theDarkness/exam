function Rectangle(x,y,width,height,color) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.color = color;
    this.render =function () {
        let ctx = document.getElementById("mycanvas").getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
let rectangele =new Rectangle(10,10,200,100,"#000000");
rectangele.render();