const wand = document.getElementById('wand');
const tiles = document.getElementsByClassName('tile');

window.onmousemove = e => {
    let x = e.clientX,
        y = e.clientY;

    const wandX = (window.innerWidth * -0.15) + x * 1.3;
    const wandY = (window.innerHeight * 0.1) + y * 0.4;
    const mouseXd = x / window.innerWidth;
    wand.animate({
        left: `${wandX}px`,
        top: `${wandY}px`,
        transform: `rotate(  ${-10 + mouseXd * 20}deg) `
    },
        { duration: 400, fill: 'forwards' });


    for (const tile of tiles) {
        const dimensions = tile.getBoundingClientRect();

        const relativeMouseX = wandX - dimensions.left,
            relativeMouseXAsDecimal = relativeMouseX / dimensions.width;

        const opacity = relativeMouseXAsDecimal,
            blur = 1 - relativeMouseXAsDecimal;

        tile.style.setProperty('--opacity', opacity);
        tile.style.setProperty('--blur', blur);
    }
}
