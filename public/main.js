document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const coords = document.getElementById("coords");
    coords.style.left = `${x + 20}px`;
    coords.style.top = `${y + 20}px`;
    coords.textContent = `X: ${x}, Y: ${y}`;
})