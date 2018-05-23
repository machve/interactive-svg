"use strict"

document.addEventListener("DOMContentLoaded", getSvg);

let color;

async function getSvg() {
let myText = await fetch ("data.json");
let myObject = myText.json();
console.log(myObject);


  let mySvg = await fetch("map.svg");
  let svg = await mySvg.text();

  document.getElementById("svg").innerHTML = svg;

  document.querySelector("svg").addEventListener("mouseover", changeColor);
  document.querySelector("svg").addEventListener("mouseout", changeColorBack);



  function changeColor() {
    let id = event.target.getAttribute("id");
    console.log(event.target);
    color = document.querySelector("#" + id).getAttribute("fill");
    document.querySelector("#" + id).setAttribute("fill", "#02AB79");
    let h1 = document.querySelector("h1");


  }




  function changeColorBack() {

    let id = event.target.getAttribute("id");

    document.querySelector("#" + id).setAttribute("fill", color);
  }
}
