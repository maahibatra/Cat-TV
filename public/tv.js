const canvas = document.getElementById("ctv");
const ctx = canvas.getContext("2d");

const video = document.createElement("video");
video.src = "ctv1.mp4";
video.loop = true;
video.muted = true;
video.play();

window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawTV();
}

let tvX, tvY, tvWidth, tvHeight, buttonX, buttonY, buttonWidth, buttonHeight;
let power = true;

function drawTV() {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const aspectRatio = 3 / 2;

    if (canvasWidth / canvasHeight > aspectRatio) {
        tvHeight = canvasHeight * 0.7;
        tvWidth = tvHeight * aspectRatio;
    } else {
        tvWidth = canvasWidth * 0.65;
        tvHeight = tvWidth / aspectRatio;
    }

    tvX = (canvasWidth - tvWidth) / 2;
    tvY = (canvasHeight - tvHeight) / 2;
    const tvRadius = tvHeight * 0.05;
    const strokeWidth = tvWidth / 120;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "#e0748e";
    ctx.beginPath();
    ctx.roundRect(tvX, tvY, tvWidth, tvHeight, tvRadius);
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = "#14090d";
    ctx.stroke();

    const screenWidth = tvWidth * 0.7;
    const screenHeight = tvHeight * 0.7;
    const screenX = tvX + (tvWidth - screenWidth) / 4;
    const screenY = tvY + (tvHeight - screenHeight) / 2;
    const curveOffset = screenWidth * 0.07;
    const strokeWidth2 = screenWidth / 70;

    ctx.beginPath();
    ctx.moveTo(screenX + curveOffset, screenY);
    ctx.quadraticCurveTo(screenX + screenWidth / 2, screenY - curveOffset, screenX + screenWidth - curveOffset, screenY);
    ctx.quadraticCurveTo(screenX + screenWidth + curveOffset, screenY + screenHeight / 2, screenX + screenWidth - curveOffset, screenY + screenHeight);
    ctx.quadraticCurveTo(screenX + screenWidth / 2, screenY + screenHeight + curveOffset, screenX + curveOffset, screenY + screenHeight);
    ctx.quadraticCurveTo(screenX - curveOffset, screenY + screenHeight / 2, screenX + curveOffset, screenY);
    ctx.closePath();

    ctx.save();
    ctx.clip();

    if(power) {
        ctx.drawImage(video, screenX, screenY - 30, screenWidth, screenHeight + 60);
        ctx.globalCompositeOperator = "screen";
        ctx.fillStyle = "#14090d";
        ctx.globalAlpha = 0.2;
        ctx.fillRect(screenX, screenY - 30, screenWidth, screenHeight + 60);
    } else {
        ctx.fillStyle = "#14090d";
        ctx.fill();
    }

    ctx.globalAlpha = 1;
    ctx.lineWidth = strokeWidth2;
    ctx.beginPath();
    ctx.moveTo(screenX + curveOffset, screenY);
    ctx.quadraticCurveTo(screenX + screenWidth / 2, screenY - curveOffset, screenX + screenWidth - curveOffset, screenY);
    ctx.quadraticCurveTo(screenX + screenWidth + curveOffset, screenY + screenHeight / 2, screenX + screenWidth - curveOffset, screenY + screenHeight);
    ctx.quadraticCurveTo(screenX + screenWidth / 2, screenY + screenHeight + curveOffset, screenX + curveOffset, screenY + screenHeight);
    ctx.quadraticCurveTo(screenX - curveOffset, screenY + screenHeight / 2, screenX + curveOffset, screenY);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    const knobX = tvX + tvWidth / 1.12;
    const knobY = tvY + tvHeight * 0.24;
    const knobY2 = tvY + tvHeight * 0.44;
    const knobSize = tvWidth / 20;
    const knobRadius = Math.PI * 2;

    const lineAngle = Math.PI;
    const lineWidth = knobSize / 20;
    const lineStartX = knobX + knobSize / 1.7 * Math.cos(lineAngle);
    const lineStartY = knobY + knobSize / 1.7 * Math.sin(lineAngle);
    const lineEndX = knobX + knobSize * Math.cos(lineAngle);
    const lineEndY = knobY + knobSize * Math.sin(lineAngle);
    const lineStartY2 = knobY2 + knobSize / 1.7 * Math.sin(lineAngle);
    const lineEndY2 = knobY2 + knobSize * Math.sin(lineAngle);

    const dotDistance = knobSize * 1.2;
    const minX = knobX - dotDistance;
    const maxX = knobX + dotDistance;
    const dotY = knobY;
    const dotSize = knobSize / 15;

    const numLines = 12;
    const lineAngleStep = Math.PI * 2 / numLines;

    ctx.fillStyle = "#8f4050";
    ctx.beginPath();
    ctx.arc(knobX, knobY, knobSize, 0, knobRadius);
    ctx.closePath();
    ctx.fill();

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#14090d";
    ctx.beginPath();
    ctx.moveTo(lineStartX, lineStartY);
    ctx.lineTo(lineEndX, lineEndY);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = "#14090d";
    ctx.beginPath();
    ctx.arc(minX, dotY, dotSize, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(maxX, dotY, dotSize, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    for(let i = 0; i < numLines; i++) {
        const angle = i * lineAngleStep;

        const lineStartX = knobX + knobSize * 1.1 * Math.cos(angle);
        const lineStartY = knobY2 + knobSize * 1.1 * Math.sin(angle);

        const lineEndX = knobX + knobSize * 1.2 * Math.cos(angle);
        const lineEndY = knobY2 + knobSize * 1.2 * Math.sin(angle);

        ctx.lineWidth = knobSize / 20;
        ctx.strokeStyle = "#14090d";
        ctx.beginPath();
        ctx.moveTo(lineStartX, lineStartY);
        ctx.lineTo(lineEndX, lineEndY);
        ctx.closePath();
        ctx.stroke();
    }

    ctx.fillStyle = "#8f4050";
    ctx.beginPath();
    ctx.arc(knobX, knobY2, knobSize, 0, knobRadius);
    ctx.closePath();
    ctx.fill();

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#14090d";
    ctx.beginPath();
    ctx.moveTo(lineStartX, lineStartY2);
    ctx.lineTo(lineEndX, lineEndY2);
    ctx.closePath();
    ctx.stroke();

    buttonX = tvX + tvWidth / 1.165;
    buttonY = tvY + tvHeight * 0.57;
    buttonWidth = tvWidth / 15;
    buttonHeight = tvHeight / 15;
    const buttonRadius = buttonHeight * 0.1;

    ctx.fillStyle = "#7a3745";
    ctx.beginPath();
    ctx.roundRect(buttonX, buttonY, buttonWidth, buttonHeight, buttonRadius);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#14090d";
    ctx.font = "bold " + (buttonHeight / 4) + "px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("ON/OFF", buttonX + buttonWidth / 2, buttonY + buttonHeight / 1.9);

    const speakerX = tvX + tvWidth / 1.205;
    const speakerY = tvY + tvHeight * 0.685;
    const speakerWidth = tvWidth / 8;
    const speakerHeight = tvHeight / 6.8;
    const speakerRadius = speakerHeight * 0.05;
    
    const speakerCanvas = document.createElement("canvas");
    const speakerCtx = speakerCanvas.getContext("2d");
    
    speakerCanvas.width = speakerWidth / 25;
    speakerCanvas.height = speakerHeight / 30;
    if(speakerCanvas.width < 2 || speakerCanvas.height < 2) {
        speakerCanvas.width = 2;
        speakerCanvas.height = 2;
    }

    const patternX = speakerCanvas.width / 1.4;
    const patternY = speakerCanvas.height / 1.4;

    ctx.fillStyle = "#24171c";
    speakerCtx.fillRect(0, 0, patternX, patternY);
    speakerCtx.fillRect(10, 0, patternX, patternY);
    speakerCtx.fillRect(0, 10, patternX, patternY);
    speakerCtx.fillRect(10, 10, patternX, patternY);

    const speakerPattern = ctx.createPattern(speakerCanvas, "repeat");

    ctx.fillStyle = speakerPattern;
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
    const standY = tvY + tvHeight + strokeWidth / 3;

    ctx.fillStyle = "#3d1822";
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

    ctx.fillStyle = "#471f2a";
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
    const earY = tvY - strokeWidth / 2;

    ctx.fillStyle = "#7a3745";
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

    ctx.fillStyle = "#592530";
    ctx.beginPath();
    ctx.moveTo(earX + earWidth / 7, earY);
    ctx.quadraticCurveTo(earX + earWidth / 4, earY - earHeight / 1.7, earX + earWidth / 1.2, earY);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(earX2 - earWidth / 7, earY);
    ctx.quadraticCurveTo(earX2 - earWidth / 4, earY - earHeight / 1.7, earX2 - earWidth / 1.2, earY);
    ctx.closePath();
    ctx.fill();

    const whiskerWidth = tvWidth / 10;
    const whiskerX = tvX - whiskerWidth + tvWidth / 45;
    const whiskerX2 = tvX + tvWidth - tvWidth / 45;
    const whiskerY = tvY + tvHeight / 2.2;
    const whiskerSize = tvHeight / 150;
    const whiskerSpacing = tvHeight / 15;
    const whiskerSpacing2 = tvHeight / 20;

    ctx.fillStyle = "#6b404a";
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

    requestAnimationFrame(drawTV);
}

canvas.addEventListener("click", function(e) {
    const clickX = e.offsetX;
    const clickY = e.offsetY;

    if(clickX >= buttonX && clickX <= buttonX + buttonWidth && clickY >= buttonY && clickY <= buttonY + buttonHeight) {
        console.log("button clicked");

        power = !power;
        drawTV();
    }
})

resizeCanvas();