"use strict"

document.addEventListener("DOMContentLoaded", loadSvg);

let div = document.getElementById("svg");
div.style.width = "50%";
div.style.height = "50%";

async function loadSvg() {
    let mySvg = await fetch("pie.svg");
    let svg = await mySvg.text();

    div.innerHTML = svg;
    document.querySelector("svg").addEventListener("mouseover", changeColor);
    document.querySelector("svg").addEventListener("mouseout", changeColorBack);

    function changeColor (){
console.log(event.target);
let target = event.target.getAttribute("id");
console.log(target)
document.querySelector("#"+target).setAttribute("fill", "#FF00F7");

    }
    function changeColorBack (){
        console.log(event.target);
        let target = event.target.getAttribute("id");
        console.log(target)
        document.querySelector("#"+target).setAttribute("fill", "#FFEE28");
        
            }
    // let one = document.querySelector("#one");
    // one.addEventListener("mouseenter", function () {
    //     one.setAttribute("fill", "#FF00F7")
    // });
    // one.addEventListener("mouseout", function () {
    //     one.setAttribute("fill", "#bf5827")
    // });

    // let second = document.querySelector("#two");
    // second.addEventListener("mouseenter", function () {
    //     second.setAttribute("fill", "#FFEE28")
    // });
    // second.addEventListener("mouseout", function () {
    //     second.setAttribute("fill", "#1f449c")
    // });

    // let third = document.querySelector("#three");
    // three.addEventListener("mouseenter", function () {
    //     three.setAttribute("fill", "#903FF2")
    // });
    // three.addEventListener("mouseout", function () {
    //     three.setAttribute("fill", "#5aba47")
    // });

}
// document.queryselector("#pie").addEventListener("")