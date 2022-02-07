export let itemCanv = document.querySelector('canvas');
itemCanv.width = window.innerWidth;
itemCanv.height = window.innerHeight;
export let canvas = itemCanv.getContext("2d");

export class Circle {
    constructor(x, y, raduis, color) {
        this.x = x;
        this.y = y;
        this.raduis = raduis;
        this.color = color;
    }
    drawCircle() {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.raduis, 0, Math.PI * 2);
        canvas.fillStyle = this.color;
        canvas.fill();
        canvas.closePath();
    }
}
export class Movecircle extends Circle {
    constructor(x, y, raduis, color, velocity) {
        super(x, y, raduis, color);
        this.velocity = velocity;
        this.alpha = 1
    }
    move() {
        // canvas.save();
        canvas.globalAlpha = this.alpha
        this.drawCircle();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= .01;
    }
}