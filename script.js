const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = [];
const maxLines = 100; // Maximum number of lines

// Line class
class Line {
    constructor() {
        this.x1 = Math.random() * canvas.width;
        this.y1 = Math.random() * canvas.height;
        this.x2 = Math.random() * canvas.width;
        this.y2 = Math.random() * canvas.height;
        this.color = `rgba(255, 255, 255, ${Math.random()})`; // Random opacity
        this.speed = Math.random() * 2 + 0.5; // Random speed
    }

    update() {
        this.x1 += (Math.random() - 0.5) * this.speed;
        this.y1 += (Math.random() - 0.5) * this.speed;
        this.x2 += (Math.random() - 0.5) * this.speed;
        this.y2 += (Math.random() - 0.5) * this.speed;

        // Keep lines within canvas bounds
        this.x1 = (this.x1 + canvas.width) % canvas.width;
        this.y1 = (this.y1 + canvas.height) % canvas.height;
        this.x2 = (this.x2 + canvas.width) % canvas.width;
        this.y2 = (this.y2 + canvas.height) % canvas.height;
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

// Create lines
for (let i = 0; i < maxLines; i++) {
    lines.push(new Line());
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(line => {
        line.update();
        line.draw();
    });
    requestAnimationFrame(animate);
}

// Start animation
animate();