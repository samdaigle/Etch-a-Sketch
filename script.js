const main = document.querySelector("body");
const script = document.querySelector("script");
const container = document.createElement("div");

container.id = "container";
main.insertBefore(container, script);


for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
}

const square = document.querySelectorAll(".square");

console.log(square);