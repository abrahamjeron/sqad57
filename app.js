const triggerbtn1 = document.getElementById("game-trigger")
const hidden = document.getElementsByClassName("hidden")
const flyer1 = document.getElementById("cloud3")
const flyer2 = document.getElementById("cloud1")
const flyer3 = document.getElementById("cloud2")
const flyer4 = document.getElementById("cloud4")
const animate = document.getElementsByClassName("flyer")
const animate2 = document.getElementsByClassName("flyer2")
const animate3 = document.getElementsByClassName("flyer3")
const animate4 = document.getElementsByClassName("flyer4")

triggerbtn1.addEventListener("click", () =>{
    flyer1.classList.toggle("flyer");
    flyer1.classList.toggle("hidden");
    flyer2.classList.toggle("flyer2");
    flyer2.classList.toggle("hidden");
    flyer3.classList.toggle("flyer3");
    flyer3.classList.toggle("hidden");
    flyer4.classList.toggle("flyer4");
    flyer4.classList.toggle("hidden")
})
