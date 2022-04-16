let menuToggler = document.querySelector(".menu-toggle");
let nav = document.querySelector(".nav");

menuToggler.onclick = function () {
	this.classList.toggle("clicked-menu");
	nav.classList.toggle("open-nav");
};

let videoPlayer = document.getElementById("videoPlayer");
let videoFullScreen = document.getElementById("videoFullScreen");
let close = document.querySelector(".icon.close");

videoPlayer.onclick = function () {
	videoFullScreen.classList.add("openVideo");
};
close.onclick = function () {
	videoFullScreen.classList.remove("openVideo");
};
document.onkeyup = function (e) {
	if(e.key==="Escape") {
		videoFullScreen.classList.remove("openVideo");
	}
};
