const slides = [
    "https://picsum.photos/id/10/2500/1667",
    "https://picsum.photos/id/11/2500/1667",
    "https://picsum.photos/id/12/2500/1667",
    "https://picsum.photos/id/13/2500/1667",
    "https://picsum.photos/id/10/2500/1667",
    "https://picsum.photos/id/11/2500/1667",
    "https://picsum.photos/id/12/2500/1667",
    "https://picsum.photos/id/13/2500/1667",
];

const image = document.querySelector("#slide");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const dots = document.querySelector("#dots");

let currentIndex = 0;

prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
        updateSlider();
    }
});

nextBtn.addEventListener("click", function () {
    if (currentIndex < slides.length - 1) {
        currentIndex = currentIndex + 1;
        updateSlider();
    }
});

dots.addEventListener("click", event => {
    const dotItem = event.target.closest(".dot-item");
    if (dotItem) {
        currentIndex = Number(dotItem.id);
        updateSlider();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        prevBtn.click();
    } else if (event.key === "ArrowRight") {
        nextBtn.click();
    }
});

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.classList.add("dot-item");
        dot.id = i;
        dot.innerHTML = `<span class="dot"></span>`;
        dots.appendChild(dot);
    }
}

function updateSlider() {
    image.setAttribute("src", slides[currentIndex]);

    const allDots = document.querySelectorAll(".dot-item");
    allDots.forEach(dot => {
        if (Number(dot.id) === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

createDots();
updateSlider();