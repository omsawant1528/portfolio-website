  // Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Typing Effect

const text = "Frontend Web Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;
const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
