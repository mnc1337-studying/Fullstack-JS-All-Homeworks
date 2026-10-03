class Slider {
    constructor(slidesList) {
        this.slides = slidesList;
        this.currentIndex = 0;

        this.image = document.querySelector("#slide");
        this.prevBtn = document.querySelector("#prev-btn");
        this.nextBtn = document.querySelector("#next-btn");
        this.dots = document.querySelector("#dots");

        this.init();
    }

    init() {
        this.createDots();
        this.updateSlider();

        this.prevBtn.addEventListener("click", () => this.prev());
        this.nextBtn.addEventListener("click", () => this.next());
        this.dots.addEventListener("click", event => this.handleDotClick(event));
        document.addEventListener("keydown", event => this.handleKeyClick(event));
    }

    createDots() {
        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement("li");
            dot.classList.add("dot-item");
            dot.id = i;
            dot.innerHTML = `<span class="dot"></span>`;
            this.dots.appendChild(dot);
        }
    }

    updateSlider() {
        this.image.setAttribute("src", this.slides[this.currentIndex]);

        const allDots = this.dots.querySelectorAll(".dot-item");
        allDots.forEach((dot) => {
            if (Number(dot.id) === this.currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex = this.currentIndex - 1;
            this.updateSlider();
        }
    }

    next() {
        if (this.currentIndex < this.slides.length - 1) {
            this.currentIndex = this.currentIndex + 1;
            this.updateSlider();
        }
    }

    handleDotClick(event) {
        const dotItem = event.target.closest(".dot-item");
        if (dotItem) {
            this.currentIndex = Number(dotItem.id);
            this.updateSlider();
        }
    }

    handleKeyClick(event) {
        if (event.key === "ArrowLeft") {
            this.prevBtn.click();
        } else if (event.key === "ArrowRight") {
            this.nextBtn.click();
        }
    }
}

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

const mySlider = new Slider(slides);