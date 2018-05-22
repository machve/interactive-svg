"use strict"

document.addEventListener("DOMContentLoaded", loadSvg);

let div = document.getElementById("svg");
div.style.width = "50%";
div.style.height = "50%";

async function loadSvg() {
    let mySvg = await fetch("pie.svg");
    let svg = await mySvg.text();

    div.innerHTML = svg;


let one = document.querySelector("#one");
one.addEventListener("mouseenter", function(){
    one.setAttribute("fill", "#FF00F7")
});
one.addEventListener("mouseout", function(){
    one.setAttribute("fill", "#bf5827")
});

let second = document.querySelector("#two");
second.addEventListener("mouseenter", function(){
    second.setAttribute("fill", "#FFEE28")
});
second.addEventListener("mouseout", function(){
   second.setAttribute("fill", "#1f449c")
});

let third = document.querySelector("#three");
three.addEventListener("mouseenter", function(){
 three.setAttribute("fill", "#903FF2")
});
three.addEventListener("mouseout", function(){
   three.setAttribute("fill", "#5aba47")
});


}

