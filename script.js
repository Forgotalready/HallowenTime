class Application {
    start = () => {
        this.timeShowBlock = document.querySelector(".time-shower");

        const currentYear = new Date().getFullYear();
        this.hallowenTime = new Date(currentYear, 9, 31, 0, 0, 0, 0)
    };

    update = () => {
        const diff = (this.hallowenTime - new Date()) / 1000;

        if(diff < 0) {
            this.timeShowBlock.textContent = "Магия кончилась, хэллуин прошёл";
            return;
        }

        this.timeShowBlock.textContent = Math.floor(diff);
    };
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const app = new Application();
app.start();

(async () => {
    while (true) {
        app.update();

        const delay = 1000 - (Date.now() % 1000);
        await sleep(delay);
    }
})();