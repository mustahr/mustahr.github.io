let activeIndex = 0;
const groups = document.getElementsByClassName('artic');
const text = document.getElementById('text-test');

const handleRightClick = () => {
    text.classList.add('anime');

    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    // Active group becomes after
    currentGroup.dataset.status = "after";

    // Next group becomes active
    nextGroup.dataset.status = "becoming-active";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    })
}



const handleLeftClick = () => {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    // Active group becomes after
    currentGroup.dataset.status = "before";

    // Next group becomes active
    nextGroup.dataset.status = "becoming-active-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    })
}