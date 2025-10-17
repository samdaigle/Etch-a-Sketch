const main = document.querySelector("body");
const script = document.querySelector("script");
const container = document.createElement("div");
const header = document.createElement("div");
const btn = document.createElement("button");

header.id = "header";
container.id = "container";

main.insertBefore(container, script);
main.insertBefore(header, container);


header.appendChild(btn);
btn.textContent = "Reset";



for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
}

const square = document.querySelectorAll(".square");

square.forEach( (square) => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    })
})