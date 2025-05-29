// Get the canvas and its 2D rendering context
const canvas = document.getElementById("my_canvas");
const context = canvas.getContext("2d");

// Ball properties
let x = 100;
let y = 100;
let radius = 20;
let dx = 2; // horizontal speed
let dy = 2; // vertical speed

// Move the ball by updating its position
function moveBall() {
  x += dx;
  y += dy;

  // Bounce off left/right walls
  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx;
  }

  // Bounce off top/bottom walls
  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy;
  }
}

// Draw the ball on the canvas
function drawBall() {
  context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2); // Draw circle
  context.fillStyle = "blue";
  context.fill();
  context.closePath();
}

// Animate function: updates position and redraws
function animate() {
  moveBall();
  drawBall();
  window.requestAnimationFrame(animate); // Loop the animation
}

// Start the animation
window.requestAnimationFrame(animate);
