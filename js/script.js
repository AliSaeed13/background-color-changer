const colors = ["red","green", "blue", "#f7f7f7","rgb(50,40,100)"];

const btn = document.querySelector(".btn");
const color = document.querySelector("#color");

btn.addEventListener("click",function () {
    const randonNumber =getRandomNamber();
    document.body.style.backgroundColor = colors[randonNumber];
    color.textContent = colors[randonNumber];
});

function getRandomNamber() {
    return Math.floor(Math.random() * colors.length);
}