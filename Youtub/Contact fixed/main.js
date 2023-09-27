const closeBtn = document.getElementById("hide-contact");
const contactUs = document.getElementById("contact-us");
const wtp = document.getElementById("wtp");
const fb = document.getElementById("fb");

closeBtn.addEventListener("click", () => {
    closeBtn.classList.toggle("border-button")
    contactUs.classList.toggle("hide-contact");
    wtp.classList.toggle("hide-contact");
    fb.classList.toggle("hide-contact");
});
