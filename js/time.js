// Time
var deviceTime = document.querySelector('.topinfo .time');

deviceTime.innerHTML = moment().format('h:mm');

setInterval(function() {
	deviceTime.innerHTML = moment().format('h:mm');
}, 1000);
