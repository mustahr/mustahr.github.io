const color = ['#FEA1A1', '#9336B4', '#40128B', '#F24C3D', '#F29727', '#F2BE22', '#22A699'];
let i = 0;
for (const e of document.getElementsByClassName('shape')) {
    e.style.background = color[i];
    i++;
}

const wrapper = document.getElementById('wrapper');

const wrapping = () => {
    let number = Math.floor(Math.random() * 4) + 1;
    wrapper.dataset.roundness = number;
}
setInterval(() => {
    wrapping();
}, 3000);