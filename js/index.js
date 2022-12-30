window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    document.getElementById("navbar").style.background = "#fff";
}

const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});