const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomHex() {
    randomHex = ""
    while (randomHex.length < 6) {
        randomHex = randomHex + colors[Math.floor(Math.random() * colors.length)]
    }
    return randomHex;
};

btn.addEventListener("click", function() {
    const temp = "#" + getRandomHex();
    document.body.style.background = temp;
    color.textContent = temp;
});
