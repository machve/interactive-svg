"use strict"

document.addEventListener("DOMContentLoaded", getSvg);

async function getSvg () {
    let mySvg = await fetch("map.svg");
    let svg = await mySvg.text();

    document.getElementById("svg").innerHTML = svg;
}
