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
var question = "paid";
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

// Answer to composed message
function answerMessage(text){
	text = text.toUpperCase();

	if (question === 'idle'){
		inner = 'Please let me finish.' +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		displayAnswer(inner);
	}

	if (question === 'paid'){
		if ((text != 'A') && (text != 'B') && (text != 'C')){
			inner = 'Please answer correctly with A, B or C' +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		else if (text == 'A') {
			inner = "Mauvaise rep it's not A..." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		else if (text == 'B') {
			inner = "Business is the wrong answer!" +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		// Good answer --> next part
		else {
			question = "idle";

		  inner = "Yes Weather Apps!" +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);

			inner2 = "Wait I'll send you the graph." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner2);
			}, 1000);

			setTimeout( function() {
				displayAds();
			}, 2000);


			inner3 = "J'explique un poil." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner3);
			}, 3000);

			inner4 = "Passons à la q suivante." +
				'<span>What category has more paid apps:' +
				'<br>- A: Game Word' +
				'<br>- B: Game Puzzle' +
				'<br>- C: Game Arcade</span>' +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner4);
				question = "ads";
			}, 3500);
		}
	}


	if (question === 'ads'){
		if ((text != 'A') && (text != 'B') && (text != 'C')){
			inner = 'Please answer correctly with A, B or C' +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		else if (text == 'C') {
			inner = "Mauvaise rep it's not c..." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		else if (text == 'B') {
			inner = "^pusszles is the wrong answer!" +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		// Good answer --> next part
		else {
			question = "idle";

		  inner = "Yessai." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);

			inner2 = "Look at this graph." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner2);
			}, 1000);

			setTimeout( function() {
				displayPaid();
			}, 2000);


			inner3 = "J'explique encore." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner3);
			}, 3000);

			inner4 = "Voilivoilou bisou."
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner4);
				question = "end";
			}, 3500);
		}
	}
}

// Create element with the answer
function displayAnswer(inner){
	setTimeout(function() {
		var element = document.createElement('div');
		element.classList.add('message', 'received');

		element.innerHTML = inner;
		conversation.appendChild(element);
		conversation.scrollTop = conversation.scrollHeight;
	}, 500);
}

// Display graph Ads
function displayAds(){
	setTimeout(function() {
		var element = document.createElement('div');
		element.setAttribute("id", "contentAds");
		element.classList.add('message', 'received');
		element.onclick = zoomAds;
		element.style.cursor = "pointer";

		var graph = document.getElementById("bubbleAdsSmall");
		graph.style.display = "block";
		inner = "Voilà." +
			graph.outerHTML +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		graph.style.display = "none";

		element.innerHTML = inner;
		conversation.appendChild(element);
		conversation.scrollTop = conversation.scrollHeight;
	}, 500);
}

// Click on graph Ads
function zoomAds(){
	var element = document.getElementById("contentAds");

	if (element.classList.contains("zoomed")){
		element.classList.remove('zoomed');

		var graph = document.getElementById("bubbleAdsSmall");
		graph.style.display = "block";
		inner = "Voila." +
			graph.outerHTML +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		graph.style.display = "none";

		element.innerHTML = inner;
	}
	else{
		element.classList.add('zoomed');

		var graph = document.getElementById("bubbleAdsBig");
		graph.style.display = "block";
		inner = "Voilou." +
			graph.outerHTML +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		graph.style.display = "none";

		element.innerHTML = inner;
	}
}


// Display graph Paid
function displayPaid(){
	setTimeout(function() {
		var element = document.createElement('div');
		element.setAttribute("id", "contentPaid");
		element.classList.add('message', 'received');
		element.onclick = zoomPaid;
		element.style.cursor = "pointer";

		var graph = document.getElementById("bubblePaidSmall");
		graph.style.display = "block";
		inner = "Voilà." +
			graph.outerHTML +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		graph.style.display = "none";

		element.innerHTML = inner;
		conversation.appendChild(element);
		conversation.scrollTop = conversation.scrollHeight;
	}, 500);
}

// Click on graph Paid
function zoomPaid(){
	var element = document.getElementById("contentPaid");

	if (element.classList.contains("zoomed")){
		element.classList.remove('zoomed');

		var graph = document.getElementById("bubblePaidSmall");
		graph.style.display = "block";
		inner = "Voila." +
			graph.outerHTML +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		graph.style.display = "none";

		element.innerHTML = inner;
	}
	else{
		element.classList.add('zoomed');

		var graph = document.getElementById("bubblePaidBig");
		graph.style.display = "block";
		inner = "Voilou." +
			graph.outerHTML +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		graph.style.display = "none";

		element.innerHTML = inner;
	}
}


// Type a message
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
