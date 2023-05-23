const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
});

function rotateElement(e, element) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = (x - middleX) / middleX * 45;
    const offsetY = (y - middleY) / middleY * 45;
    // console.log(offsetX, offsetY);

    element.style.setProperty("--rotate-x", -1 * offsetY + "deg");
    element.style.setProperty("--rotate-y", offsetX + "deg");
}

