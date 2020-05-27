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
		inner = 'Please let me finish my explanations.' +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		displayAnswer(inner);
	}

	if (question === 'paid'){
		if ((text != 'A') && (text != 'B') && (text != 'C')){
			inner = "You didn't answer as I told you... Just send A, B or C." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		else if (text == 'A') {
			inner = "No that's not it." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		else if (text == 'B') {
			inner = "It's not business apps." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		// Good answer --> next part
		else {
			question = "idle";

		  inner = "Yes it's Weather apps! Wait I'll send you the graph." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);

			setTimeout( function() {
				displayPaid();
			}, 2000);

			inner3 = "What I first noticed is how low the percentages are. Even the category " +
				"with the highest proportion of non-free apps is at 3%! This is probably due to the fact that " +
				"people are more likely to download free apps than to even pay 1 Swiss franc! " +
				"Remember that a free app has nearly zero user acquisition barrier since there is not even " +
				"the need to provide payment information up front." +
				"<br>I also think that Weather apps have a higher percentage of paid apps because " +
				"the latter are based on private sources in order to provide a higher accuracy. " +
				"This has probably some cost that is compensated with the app's price." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner3);
			}, 3500);

			inner4 = "<span>Let's now get to the next question. " +
				'What category has the most apps containing ads:' +
				'<br>- A: Game Word' +
				'<br>- B: Game Puzzle' +
				'<br>- C: Game Arcade</span>' +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner4);
				question = "ads";
			}, 5000);
		}
	}


	if (question === 'ads'){
		if ((text != 'A') && (text != 'B') && (text != 'C')){
			inner = "Nothing has changed, you still have to answer with A, B or C." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		else if (text == 'C') {
			inner = "Did you really think it would be answer C again?" +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		else if (text == 'B') {
			inner = "Nope, hard question right?" +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);
		}

		// Good answer --> next part
		else {
			question = "idle";

		  inner = "I knew you'd find the answer! But if you look at the graph you'll see that it wasn't actually that simple." +
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			displayAnswer(inner);

			setTimeout( function() {
				displayAds();
			}, 2000);


			inner3 = "Now the percantages are much higher! Almost all the Game categories are above 90% " +
			  'and this can actually be linked to the fact that these apps are mostly free. ' +
				'Indeed, this represents the business model of what is called "freemium apps". ' +
				'They are free in order to attract many users, but also contain ads that help the developer make money. ' +
				'Moreover, they usually contain in-app purchases that can for example remove all ads. ' +
				"This is especially the case for Gaming apps where sometimes players can't resist from getting a power-up that would help them in the game."
				'<span class="metadata">' +
					'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner3);
			}, 3500);

			inner4 = "Anyway, I'm glad I shared this with you. This helped me understand that " +
				'free apps with ads seem to be the model of success of many apps nowadays. Thanks for your help, and see you soon!' +
				"<br>Oh and don't forget to check the EPFL Campus app, the grade for the exam is out!"
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
				'</span>';
			setTimeout( function() {
				displayAnswer(inner4);
				question = "end";
			}, 5500);
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
		inner = "Click on the graph to make it bigger!" +
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
		element.style.maxWidth = "85%";

		var graph = document.getElementById("bubblePaidSmall");
		graph.style.display = "block";
		inner = "Click on the graph to make it bigger!" +
			graph.outerHTML +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		graph.style.display = "none";

		element.innerHTML = inner;
	}
	else{
		element.classList.add('zoomed');
		element.style.maxWidth = "100%";

		var graph = document.getElementById("bubblePaidBig");
		graph.style.display = "block";
		inner = "You can click again to zoom out." +
			graph.outerHTML +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		graph.style.display = "none";

		element.innerHTML = inner;
	}
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
		inner = "Click on the graph to make it bigger!" +
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
		element.style.maxWidth = "85%";

		var graph = document.getElementById("bubbleAdsSmall");
		graph.style.display = "block";
		inner = "Click on the graph to make it bigger!" +
			graph.outerHTML +
			'<span class="metadata">' +
				'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'</span>';
		graph.style.display = "none";

		element.innerHTML = inner;
	}
	else{
		element.classList.add('zoomed');
		element.style.maxWidth = "100%";

		var graph = document.getElementById("bubbleAdsBig");
		graph.style.display = "block";
		inner = "You can click again to zoom out." +
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
