const gallery = document.getElementById('gallery');

window.onmousemove = e => {
    const x = e.clientX,
        y = e.clientY;


    const xDecimal = x / window.innerWidth,
        yDecimal = y / window.innerHeight;


    const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
    const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;

    gallery.animate({
        transform: `translate(${panX}px,${panY}px)`
    }, { duration: 4000, fill: 'forwards', easing: 'ease' })

}