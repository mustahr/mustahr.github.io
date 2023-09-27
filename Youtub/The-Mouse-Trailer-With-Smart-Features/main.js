const trailer = document.getElementById('trailer');


const animeTrailer = (e, interactableEl) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframe = {
        transform: `translate(${x}px ,${y}px) scale(${interactableEl ? 3 : 1})`
    }

    trailer.animate(keyframe,
        {
            duration: 800,
            fill: 'forwards'
        });
}

const getTrailerClass = type => {
    switch (type) {
        case "video":
            return "fa-solid fa-play";
        default: return "fa-solid fa-arrow-right";
    }
}

window.onmousemove = e => {
    const interactable = e.target.closest(".iteractable"),
        interactableEl = interactable !== null;
    const icon = document.getElementById("trailer-icon")
    animeTrailer(e, interactableEl);

    trailer.dataset.type = interactableEl ? interactable.dataset.type : "";

    if (interactableEl) {
        icon.className = getTrailerClass(interactable.dataset.type);
    }
}