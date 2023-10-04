let colours = [0,0.2,0.4,0.6,0.8,1];
let element = document.querySelectorAll(".col-2");
let range = document.querySelector("#customRange");
let txtSpeed = document.querySelector("#speed");
let value = 150;
let interval;


setColor();

range.addEventListener("input",function (){
    value = parseInt(range.value);
    clearInterval(interval);
    setColor();
    txtSpeed.innerText = ((100-(value*0.5)/3)).toFixed(0)+"%";
    // txtSpeed.setAttribute("class","fs-3");
    // txtSpeed.setAttribute("class","text-white");
});

function setColor() {
    interval = setInterval(function () {
        for (let i = 0; i < colours.length; i++) {
            element[i].style.backgroundColor = "firebrick";
            element[i].style.opacity = colours[i];
        }
        let lastColor = colours.pop();
        colours.unshift(lastColor);
        console.log(value);
    }, value);
}