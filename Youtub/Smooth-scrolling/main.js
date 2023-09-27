const smooth = document.getElementById('smooth');
const smoother = document.getElementById('smoother');
const body = document.body,
    html = document.documentElement;


const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
    var scrollAmount = window.pageYOffset || document.documentElement.scrollTop;
    smoother.animate({
        transform: `translateY(-${scrollAmount}px)`
    }, { duration: 5000, fill: 'forwards' });

    for (const image of document.getElementsByClassName('img')) {
        let max = (scrollAmount * 100) / (scrollHeight / 2);
        image.animate({
            backgroundPosition: `center ${max}%`
        }, { duration: 5000, fill: 'forwards' })
    }
});
