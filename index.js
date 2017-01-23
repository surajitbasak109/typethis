var showThis = document.querySelector('.showThis');
var writeThis = document.querySelector('.writeThis');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var speed = document.getElementById('speed');
var fsz = document.getElementById('fsz');
var ff = document.getElementById('ff');
var timeout_id, type_this, delay = 70;

//~ var type_this = "Kazam is a simple screen recording program that will capture the content of your screen and record a video file that can be played by any video player that supports VP8/WebM video format.\n\nOptionally you can record sound from any sound input device that is supported and visible by PulseAudio.";

var index = 0;

speed.addEventListener('change', function (e) {
	if (e.target.value !== "") {
		delay = e.target.value;
	}
});

fsz.addEventListener('change', function(e) {
	if (e.target.value !== "") {
		showThis.style.fontSize = e.target.value + 'px';
	}
});

ff.addEventListener('change', function(e) {
	if (e.target.value !== "") {
		showThis.style.fontFamily = e.target.value;
	}
});

start.addEventListener('click', function (e) {
	index = 0;
	showThis.textContent = '';
	write();
});

stop.addEventListener('click', function (e) {
	clearInterval(timeout_id);
});

function write() {
	if (index <= writeThis.value.length) {
		showThis.textContent = writeThis.value.substr(0, index++);
		timeout_id = setTimeout(write, delay);
	}
}
