const h = document.querySelector(".heur"),
    m = document.querySelector(".min"),
    s = document.querySelector(".sec"),
    btn = document.querySelector(".btn"),
    bg = document.querySelector("body"),
    container = document.querySelector(".container"),
    sound = new Audio("../images/sound.mp3");

var now = new Date();

function returnHour(value) {
    if (value == 12) {
        return 0;
    } else {
        return (value > 12) ? ((value - 12)) : value;
    }
}

m.style.transform = `rotate(${new Date().getMinutes()*6}deg)`;
h.style.transform = `rotate(${returnHour(new Date().getHours())*30}deg)`;
sound.volume = 0.2;

btn.addEventListener("click", function () {
    if (btn.className.includes("fa-sun")) {
        btn.setAttribute("class", "btn fa-solid fa-moon");
    } else {
        btn.setAttribute("class", "btn fa-solid fa-sun");
    }
    m.classList.toggle("whiteStyle");
    btn.classList.toggle("darkStyle");
    btn.classList.toggle("border");
    bg.classList.toggle("darkStyle");
    container.classList.toggle("darkStyle");
})

function turnTheClock() {
    sound.play();
    s.style.transform = `rotate(${new Date().getSeconds()*6}deg)`;
    if (new Date().getSeconds() == 0) {
        m.style.transform = `rotate(${new Date().getMinutes()*6}deg)`;
    }
    if ((new Date().getSeconds() == 0) && (new Date().getMinutes() == 0)) {
        h.style.transform = `rotate(${returnHour(new Date().getHours())*30}deg)`;
    }
}

setInterval(turnTheClock, 1000);