const canvas = document.getElementById("ctv");
const ctx = canvas.getContext("2d");

window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawTV();
}

function drawTV() {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const aspectRatio = 3 / 2;
    let tvWidth, tvHeight;

    if(canvasWidth / canvasHeight > aspectRatio) {
        tvHeight = canvasHeight * 0.7;
        tvWidth = tvHeight * aspectRatio;
    } else {
        tvWidth = canvasWidth * 0.65;
        tvHeight = tvWidth / aspectRatio;
    }

    const tvX = (canvasWidth - tvWidth) / 2;
    const tvY = (canvasHeight - tvHeight) / 2;
    const tvRadius = tvHeight * 0.05;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "lightpink";
    ctx.beginPath();
    ctx.roundRect(tvX, tvY, tvWidth, tvHeight, tvRadius);
    ctx.closePath();
    ctx.fill();

    const screenWidth = tvWidth * 0.7;
    const screenHeight = tvHeight * 0.7;
    const screenX = tvX + (tvWidth - screenWidth) / 3.5;
    const screenY = tvY + (tvHeight - screenHeight) / 2;
    const screenRadius = screenHeight * 0.07;

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.roundRect(screenX, screenY, screenWidth, screenHeight, screenRadius);
    ctx.closePath();
    ctx.fill();

    const knobX = tvX + tvWidth / 1.12;
    const knobY1 = tvY + tvHeight * 0.24;
    const knobY2 = tvY + tvHeight * 0.44;
    const knobSize = tvWidth / 20;
    const knobRadius = Math.PI * 2;

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(knobX, knobY1, knobSize, 0, knobRadius);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(knobX, knobY2, knobSize, 0, knobRadius);
    ctx.closePath();
    ctx.fill();

    const buttonX = tvX + tvWidth / 1.165;
    const buttonY = tvY + tvHeight * 0.57;
    const buttonWidth = tvWidth / 15;
    const buttonHeight = tvHeight / 15;
    const buttonRadius = buttonHeight * 0.1;

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.roundRect(buttonX, buttonY, buttonWidth, buttonHeight, buttonRadius);
    ctx.closePath();
    ctx.fill();
    
    const speakerX = tvX + tvWidth / 1.205;
    const speakerY = tvY + tvHeight * 0.685;
    const speakerWidth = tvWidth / 8;
    const speakerHeight = tvHeight / 6.8;
    const speakerRadius = speakerHeight * 0.05;

    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.roundRect(speakerX, speakerY, speakerWidth, speakerHeight, speakerRadius);
    ctx.closePath();
    ctx.fill();

    const standTopWidth = tvWidth / 13;
    const standTopWidth2 = standTopWidth / 1.7;
    const standBottomWidth = tvWidth / 25;
    const standBottomWidth2 = standBottomWidth / 1.7;
    const standHeight = tvHeight / 10;
    const standHeight2 = standHeight / 1.7;
    const standX = tvX + tvWidth / 9;
    const standX2 = tvX + tvWidth / 1.1;
    const standX3 = tvX + tvWidth / 6;
    const standX4 = tvX + tvWidth / 1.17;
    const standY = tvY + tvHeight;

    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.moveTo(standX3, standY);
    ctx.quadraticCurveTo(standX3 - standTopWidth / 3, standY + standHeight * 1.3, standX3 + standTopWidth / 1.7, standY);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(standX4, standY);
    ctx.quadraticCurveTo(standX4 + standTopWidth / 3, standY + standHeight * 1.3, standX4 - standTopWidth / 1.7, standY);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(standX, standY);
    ctx.quadraticCurveTo(standX - standTopWidth / 3, standY + standHeight * 2.2, standX + standTopWidth, standY);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(standX2, standY);
    ctx.quadraticCurveTo(standX2 + standTopWidth / 3, standY + standHeight * 2.2, standX2 - standTopWidth, standY);
    ctx.closePath();
    ctx.fill();

    const earWidth = tvWidth / 5;
    const earHeight = tvHeight / 3;
    const earX = tvX + tvWidth / 10;
    const earX2 = tvX + tvWidth / 1.1;
    const earY = tvY;

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(earX, earY);
    ctx.quadraticCurveTo(earX + earWidth / 10, earY - earHeight, earX + earWidth, earY);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(earX2, earY);
    ctx.quadraticCurveTo(earX2 - earWidth / 10, earY - earHeight, earX2 - earWidth, earY);
    ctx.closePath();
    ctx.fill();

    const whiskerWidth = tvWidth / 10;
    const whiskerX = tvX - whiskerWidth + tvWidth / 45;
    const whiskerX2 = tvX + tvWidth - tvWidth / 45;
    const whiskerY = tvY + tvHeight / 2.2;
    const whiskerSize = tvHeight / 150;
    const whiskerSpacing = tvHeight / 15;
    const whiskerSpacing2 = tvHeight / 20;

    ctx.fillStyle = "gray";
    ctx.save();
    ctx.translate(whiskerX, whiskerY - whiskerSpacing);
    ctx.rotate(Math.PI / 22);
    ctx.fillRect(0, 0, whiskerWidth, whiskerSize);
    ctx.restore();

    ctx.fillRect(whiskerX - whiskerSpacing / 2, whiskerY, whiskerWidth + whiskerSpacing / 4, whiskerSize);

    ctx.save();
    ctx.translate(whiskerX, whiskerY + whiskerSpacing);
    ctx.rotate(-Math.PI / 22);
    ctx.fillRect(0, 0, whiskerWidth, whiskerSize);
    ctx.restore();

    ctx.save();
    ctx.translate(whiskerX2, whiskerY - whiskerSpacing2);
    ctx.rotate(-Math.PI / 22);
    ctx.fillRect(0, 0, whiskerWidth, whiskerSize);
    ctx.restore();

    ctx.fillRect(whiskerX2 + whiskerSpacing2 / 4, whiskerY, whiskerWidth + whiskerSpacing2 / 2, whiskerSize);

    ctx.save();
    ctx.translate(whiskerX2, whiskerY + whiskerSpacing2);
    ctx.rotate(Math.PI / 22);
    ctx.fillRect(0, 0, whiskerWidth, whiskerSize);
    ctx.restore();
}

resizeCanvas();