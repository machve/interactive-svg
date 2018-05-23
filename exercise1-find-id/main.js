
document.addEventListener("DOMContentLoaded", getSvg);

async function getSvg () {
    let mySvg = await fetch("layers.svg");
    let svg = await mySvg.text();

    document.getElementById("svg").innerHTML = svg;

    let bike = document.getElementById("bike");
    console.log(bike);

    let mac = document.getElementById("mac");

    let phone = document.getElementById("phone");

bike.addEventListener("click", showInfo);
mac.addEventListener("click", showInfo);
phone.addEventListener("click", showInfo);
    function showInfo(){
  
    document.querySelector("h1").innerHTML = event.target.id;

    }
}