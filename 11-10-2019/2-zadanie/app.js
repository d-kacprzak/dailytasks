const container1 = document.querySelector(".container");
const unit = "px";
let counter = 0;
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let colorOne = '#';
    let colorTwo = '#';
    for (let i = 0; i < 6; i++) {
        colorOne += letters[Math.floor(Math.random() * 16)];
        colorTwo += letters[Math.floor(Math.random() * 16)];
    }
    return `linear-gradient(135deg,${colorOne} 10%,${colorTwo} 100%)`;
}
function appendBox() {
    const square = document.createElement("div");
    square.classList.add("box");
    square.style.width = `200${unit}`;
    square.style.height = `200${unit}`;
    square.style.backgroundImage = getRandomColor();
    square.style.display = "inline-flex";
    square.style.borderRadius = `25${unit}`;
    square.style.justifyContent = "center";
    square.style.alignItems = "center";
    square.style.font = "sans-serif";
    square.innerText = `Element nr ${++counter}`;
    container1.appendChild(square);
}

setInterval(appendBox, 1000);









