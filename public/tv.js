const canvas = document.getElementById("ctv");
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightpink';
ctx.beginPath();
ctx.roundRect(300, 100, 1100, 700, 50);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.roundRect(500, 200, 700, 400, 20);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'lightgray';
ctx.beginPath();
ctx.roundRect(370, 200, 100, 400, 20);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(420, 300, 50, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(420, 500, 50, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.roundRect(390, 400, 60, 40, 5);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'gray';
ctx.beginPath();
ctx.roundRect(360, 520, 120, 120, 10);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'brown';
ctx.beginPath();
ctx.roundRect(450, 820, 100, 50, 10);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'brown';
ctx.beginPath();
ctx.roundRect(1150, 820, 100, 50, 10);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'saddlebrown';
ctx.beginPath();
ctx.roundRect(500, 850, 50, 30, 5);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'saddlebrown';
ctx.beginPath();
ctx.roundRect(1150, 850, 50, 30, 5);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'lightpink';
ctx.beginPath();
ctx.moveTo(450, 100);
ctx.lineTo(400, 50);
ctx.lineTo(500, 100);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(1250, 100);
ctx.lineTo(1300, 50);
ctx.lineTo(1200, 100);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'gray';
ctx.fillRect(400, 300, 100, 5);
ctx.fillRect(390, 350, 110, 5);
ctx.fillRect(400, 400, 100, 5);

ctx.fillRect(1200, 300, 100, 5);
ctx.fillRect(1190, 350, 110, 5);
ctx.fillRect(1200, 400, 100, 5);