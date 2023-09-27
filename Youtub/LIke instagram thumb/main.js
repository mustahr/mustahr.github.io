const thumb = document.getElementById('thumb');
const line = document.getElementById('line');
const time = document.getElementById('time-line');
let lineRect = time.getBoundingClientRect();
thumb.style.setProperty(
    'left', `${lineRect.x}px`,
)
thumb.style.setProperty(
    'top', `${lineRect.y - 30}px`
)
line.style.setProperty(
    'left', `${lineRect.x}px`,
)
line.style.setProperty(
    'top', `${lineRect.y}px`
)

let w = 0;
const moveThumb = () => {
    time.onmousemove = e => {
        let xx = e.clientX;
        if (e.clientX < lineRect.x) {
            xx = lineRect.x
        }
        if (e.clientX > lineRect.x + lineRect.width) {
            xx = lineRect.x + lineRect.width;
            w = lineRect.width;
        }
        if (e.clientX > lineRect.x + lineRect.width) {
            w = lineRect.width;
        } else {
            w = e.clientX - lineRect.x
        }
        thumb.style.setProperty(
            'left', `${xx}px`,
        )
        
        line.style.setProperty(
            'width', `${w}px`
        )
        
    }
}

time.onmouseenter = e => {
    moveThumb(e)
}
