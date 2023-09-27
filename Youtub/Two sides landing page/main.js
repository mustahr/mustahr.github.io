const left = document.getElementById('left-side');
const body = document.querySelector('body');
let x = 0;

const handOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;
    left.animate({
        width: p + '%'
    },
        { duration: 500, fill: 'forwards' });
}

const handlLeav = e => {
    if (e.clientX < (window.innerWidth / 2)) {
        left.animate({
            width: '0%'
        },
            { duration: 500, fill: 'forwards' });
    }
    else {
        left.animate({
            width: '100%'
        },
            { duration: 500, fill: 'forwards' });
    }
}
body.onmouseenter = e => {
    window.onmousemove = handOnMove;
}

body.onmouseleave = e => {
    handlLeav(e);
}