(function(){
	"use strict";
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);
})();




'use strict'
var testim = document.getElementById("testim"),
testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
testimContent = Array.prototype.slice.call(document.getElementById("testim-conte").children),
testimleftArrow = document.getElementById("left-arrow"),
testimrightArrow = document.getElementById("right-arrow"),
testimSpeed = 4600,
currentSlide = 0,
currentActive = 0,
testimTimer
;

window.onload = function () {

	function playSlide(slide){
		for (var k = 0; k < testimDots.lenght; k++){
			testimContent[k].classList.remove("active");
			testimContent[k].classList.remove("inactive");
			testimDots[k].classList.remove("active");
		}
		if (slide < 0){
			slide = currentSlide = testimContent.lenght - 1;
		}
		if (slide > testimContent.lenght - 1){
			slide = currentSlide = 0;
		}
		if (currentActive != currentSlide) {
			testimContent[currentActive].classList.add("inactive");
		}
		testimContent[slide].classList.add("active");
		testimDots[slide].classList.add("active");

		currentActive = currentSlide;

		clearTimeout(testimTimer);
		testimTimer = setTimeout(function (){
			playSlide(currentSlide += 1);
		}, testimSpeed)
	}
	testimleftArrow.addEventListener("click", function (){
		playSlide(currentSlide -= 1);
	})
	testimrightArrow.addEventListener("click", function (){
		playSlide(currentSlide += 1);
	})
	for (var i = 0; i < testimDots.lenght; i++) {
		testimDots[i].addEventListener("click", function(){
			playSlide(currentSlide = testimDots.indexOf(this));
		})
	}
	playSlide(currentSlide);
};

const students = [
	"Junish Arora",
	"Bhuvnish arora",
	"Om kumar ",
	"Logan hiffman",
	"shauraya",
	"Aditya",
];
function generateListItems(arg) {
	let items = "";
	for (let i = 0; i < arg.length; i++) {
	items += `<li>${arg[i]}</li>`;
	}
	return items;
}

document.querySelector("main").innerHTML = `
<ol>
${generateListItems(students)}
</ol>
`;



