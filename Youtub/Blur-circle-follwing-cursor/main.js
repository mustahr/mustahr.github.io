const blob = document.getElementById('blob');

window.onmousemove = e => {
    const x = e.clientX - blob.offsetWidth / 2,
        y = e.clientY - blob.offsetHeight / 2;
    // blob.style.transform = `translate(${x}px , ${y}px)`;
    blob.animate(
        {
            transform: `translate(${x}px ,${y}px)`
        },
        {
            duration: 3000,
            fill: 'forwards'
        });
}