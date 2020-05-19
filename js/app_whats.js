/* Time */

var deviceTime = document.querySelector('.status-bar .time');
var messageTime = document.querySelectorAll('.message .time');

deviceTime.innerHTML = moment().format('h:mm');

setInterval(function() {
	deviceTime.innerHTML = moment().format('h:mm');
}, 1000);

for (var i = 0; i < messageTime.length; i++) {
	messageTime[i].innerHTML = moment().format('h:mm A');
}

/* Message */

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');

form.addEventListener('submit', newMessage);

function newMessage(e) {
	var input = e.target.input;

	if (input.value) {
		var message = buildMessage(input.value);
		conversation.appendChild(message);
		animateMessage(message);
	}

	answerMessage(input.value)
	input.value = '';
	conversation.scrollTop = conversation.scrollHeight;

	e.preventDefault();
}

function answerMessage(text){
	var element = document.createElement('div');
	element.classList.add('message', 'received');
	text = text.toUpperCase();

	if ((text != 'A') && (text != 'B') && (text != 'C')){
		element.innerHTML = 'please answer correctly with A, B or C' +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'<span class="tick tick-animation">' +
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
				'</span>' +
			'</span>';

			conversation.appendChild(element);
			conversation.scrollTop = conversation.scrollHeight;
		}

		else if (text == 'A') {
			console.log(text);
			element.innerHTML = "Mauvaise rep it's not A" +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';

				conversation.appendChild(element);
				conversation.scrollTop = conversation.scrollHeight;
		}

		else if (text == 'B') {
			console.log(text);
			element.innerHTML = "B wrong answer" +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';

				conversation.appendChild(element);
				conversation.scrollTop = conversation.scrollHeight;
		}

		else {
			console.log(text);
			element.innerHTML = "Yes social apps !" +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';

				conversation.appendChild(element);
				conversation.scrollTop = conversation.scrollHeight;
		}

}

function buildMessage(text) {
	var element = document.createElement('div');

	element.classList.add('message', 'sent');
	element.innerHTML = text +
		'<span class="metadata">' +
			'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'<span class="tick tick-animation">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
			'</span>' +
		'</span>';

	return element;
}

function animateMessage(message) {
	setTimeout(function() {
		var tick = message.querySelector('.tick');
		tick.classList.remove('tick-animation');
	}, 500);
}
