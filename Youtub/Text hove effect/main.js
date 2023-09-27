const enhace = id => {
    const ele = document.getElementById(id),
        text = ele.innerText.split('');

    ele.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");

        span.className = "letter";
        span.innerText = letter;

        ele.appendChild(span);
    });
}

enhace('musta');