// Time lock screen
var deviceTime = document.querySelector('.datum .time');
deviceTime.innerHTML = moment().format('h:mm');

var deviceDate = document.querySelector('.datum .date');
deviceDate.innerHTML = moment().format('ddd, DD MMMM').toUpperCase();

setInterval(function() {
	deviceTime.innerHTML = moment().format('h:mm');
  deviceDate.innerHTML = moment().format('ddd, DD MMMM').toUpperCase();
}, 1000);
