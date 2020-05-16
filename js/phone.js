function whenDocumentLoaded(action) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", action);
	} else {
		// `DOMContentLoaded` already fired
		action();
	}
}

let iphone;
whenDocumentLoaded(() => {
	//Each element will correspond to an app cell in the phone
	data = [ {} ,{},{},{},{},{},{},{},{},
	{name:'Rankings', icon:'facebook.png', file:'app_fb'},
	{name:'Distributions', icon:'whatsapp.png', file:'app_whats'},
	{name:'Developers', icon:'EPFL.png', file:'app_epfl'},
	{name:'Downloads', icon:'youtube.png', file:'app_ytb'},
	{name:'Comments', icon:'twitter.png', file:'app_twitter'},
	{name:'Conclusion', icon:'wikipedia.png', file:'app_wiki'}];

	iphone = new Phone('monTel', data, [14,9]);
	window.addEventListener("resize", windowUpdate);
});

function windowUpdate()
{
	console.log("YES");
	iphone.empty();
	iphone.rescale();
}


class Phone {
	constructor(container, data, ratio)
	{
		this.container=container;
		this.data=data;
		this.ratio = ratio;
		this.padding = 3;
		this.idDiscover = 9;
		this.topBarHeight=30;
		this.rescale();
	}

	rescale()
	{
		console.log("RESCALED");
		this.contWidth = document.getElementById(this.container).clientWidth;
		this.contHeight = document.getElementById(this.container).clientHeight;
		this.nbCol=Math.round(this.ratio[1]*Math.sqrt(data.length/(this.ratio[0]*this.ratio[1])));
		let sizeFromWidth = this.contWidth/((3*this.nbCol+1)/2);
		let sizeFromHeight = this.contHeight/((3*Math.ceil(data.length/this.nbCol)+3)/2);
		if(sizeFromWidth<sizeFromHeight)
		{
			this.size = sizeFromWidth;
			this.margin = this.size/2;
			this.width = this.contWidth;
			this.height = this.margin + Math.ceil(data.length/this.nbCol)*(this.size+this.margin);
		}
		else
		{
			this.size = sizeFromHeight;
			this.margin = this.size/2;
			this.height = this.contHeight;
			this.width = this.margin + this.nbCol*(this.size+this.margin);
		}

		this.offsetX = (this.contWidth-this.width)/2 ;
		this.offsetY = (this.contHeight-this.height)/2;
		this.bSize = 0.04*this.height;
		this.bPadding = 0.01*this.height;

		let topBar = document.getElementById("topBar");
		topBar.style.width = this.width-29+"px";
		topBar.style.marginLeft = this.offsetX+1.5*this.padding+"px";
		topBar.style.marginTop = this.offsetY+1.5*this.padding+"px";
		this.rescaleContent();

		this.update(this);
	}


	rescaleContent()
	{
		let contentDiv = document.getElementById("content");
		contentDiv.style.width = this.width-2*this.padding+"px";
		//contentDiv.style.height = this.height-this.margin-this.padding+"px";
		contentDiv.style.height = this.height-2*this.padding+"px";
		contentDiv.style.marginLeft = this.offsetX+this.padding+"px";
		contentDiv.style.marginTop = this.offsetY+this.padding+"px";
		let frame = d3.selectAll(".frame").attr("height", this.height-2*this.bSize-2*this.bPadding);
	}


	flipToPhone()
	{
		let parentDiv = document.getElementById(this.container).parentElement;
		if(parentDiv.classList.contains("tabletFormat"))
		{
			this.empty();
			parentDiv.classList.remove("tabletFormat");
			parentDiv.classList.add("phoneFormat");
			//We flip the ratio of the phone as well
			this.ratio.reverse();
			this.rescale();

		}
	}

	flipToTablet()
	{
		let parentDiv = document.getElementById(this.container).parentElement;
		if(parentDiv.classList.contains("phoneFormat"))
		{
			this.empty();
			parentDiv.classList.remove("phoneFormat");
			parentDiv.classList.add("tabletFormat");
			//We flip the ratio of the phone as well
			this.ratio.reverse();
			this.rescale();
		}
	}

	/*flip()
	{
	this.empty();
	let parentDiv = document.getElementById(this.container).parentElement;
	parentDiv.classList.toggle("phoneFormat");
	parentDiv.classList.toggle("tabletFormat");
	//We flip the ratio of the phone as well
	this.ratio.reverse();
	this.rescale();
}*/

//Object passed as argument as this will not be useful in onClick responses
update(phone)
{


	let svg = d3.select('#'+this.container);
	let borderPad=2.5;


	//Appends app icon when new app enters
	function appendIcon(phone, icon)
	{
		if(icon)
		{
			svg.append("defs")
			.append("pattern")
			.attr("width", 1)
			.attr("height", 1)
			.attr("id", 'icon_'+icon)
			.append("image")
			.attr("width", phone.size)
			.attr("height", phone.size)
			.attr("xlink:href", 'img/'+icon)
			return 'url(#icon_'+icon+')';
		}
		//If no icon file given, we fill in grey
		return 'grey';
	}


	//App rectangle
	svg.selectAll('rect')
	.data(this.data)
	.enter()
	.append('rect')
	.attr('x', (d,i) => this.offsetX + this.margin + (i%this.nbCol)*(this.size+this.margin))
	.attr('y', (d,i) => this.offsetY + this.margin/2 + this.topBarHeight + Math.floor(i/this.nbCol)*(this.size+this.margin))
	.attr('rx', 0.3*this.size)
	.attr('ry', 0.3*this.size)
	.attr('width', this.size)
	.attr('height', this.size)
	.attr("fill", (d) => appendIcon(phone, d.icon))
	.attr('filter', (d,i)=> i>this.idDiscover ? 'url(#grayscale)' :'')
	.attr('class', (d,i)=> i>this.idDiscover ?
				'temporary unavailable' : 'borderHighlight temporary')
	.style('visibility', (d) => d.icon? "visible" : "hidden")



	/*.on("mouseover", function (d, i) {
	// if size isn't passed as argument "this.width" should
	// be used, but if we hover too quickly the transition
	// doesn't happen and the size doesn't change
	d3.select(this).transition()
	.duration(200)
	//.attr('width', phone.size * 1.2)
	//.attr('height', phone.size * 1.2)
	.style("fill", "orange");
})

.on("mouseout", function (d, i) {
d3.select(this).transition()
.duration(200)
.attr('width', phone.size)
.attr('height', phone.size)
.style("fill", "gray");
this.active = false;
})*/

.on('click', function (d,i){
	/*var active   = this.active ? false : true;
	var newColor = active ? "red" : "orange";
	// Hide or show the elements
	d3.select(this).style("fill", newColor);
	// Update whether or not the elements are active
	this.active = active;*/
	if(d.file && i<=phone.idDiscover){
		phone.flipToTablet();
		phone.page = d.file
		if(phone.idDiscover<i+1)
		{
			phone.idDiscover =i+1;
		}

		// REMPLACER LES 3 LIGNES SUIVANTES
		let contentDiv = document.getElementById("content");
		contentDiv.classList.remove("offStage");
		contentDiv.classList.add("onStage");
		contentDiv.innerHTML='<iframe class="frame" src="html/'+phone.page+'.html"></iframe>';
		let frame = d3.selectAll(".frame").attr("height", phone.height-2*phone.bSize-2*phone.bPadding);
		topBar.classList.add("invisible");


		//contentDiv.innerHTML='<object type="text/html" data="app.html"></object>'

		// ANIMER ICI
		//jQuery(function($) {
		//  $("#content").css({"display":"inline-block"});
		//	$("#content").html('<iframe class="frame" src="'+phone.page+'.html"></iframe>');
		//});

		phone.rescaleContent();
		//let appAndText = d3.selectAll(".temporary").attr("style", "visibility:hidden;");
	}
});

//Text under
svg.selectAll('text')
.data(this.data)
.enter()
.append('text')
.attr('class', 'appText temporary')
.attr('x', (d,i) => this.offsetX + this.margin + (i%this.nbCol)*(this.size+this.margin))
.attr('y', (d,i) => this.offsetY + this.margin/2 + this.topBarHeight + Math.floor(i/this.nbCol)*(this.size+this.margin) +
this.size + this.margin/2)
.text((d,i) => d.name)

//Center the texts
d3.selectAll(".appText").each(function(d,i) {
	d3.select(this)
	.attr("x", 	+d3.select(this).attr('x') + (phone.size-this.getComputedTextLength())/2);
});


//Border of phone

svg.append('rect')
.attr('id', 'border')
.attr('x', this.offsetX+borderPad)
.attr('y', this.offsetY+borderPad)
.attr('rx', 15)
.attr('ry', 15)
.attr('width', this.width-2*borderPad)
.attr('height', this.height-2*borderPad)
.style('stroke', 'black')
.style('stroke-width', 5)
.style('fill','none');




//Buttons

let buttons = d3.select('#buttons')
.style('-webkit-transform', 'translate('+this.offsetX+','+(this.offsetY+ this.height - 2*this.bSize - this.bPadding/3)+')')
.attr('transform', 'translate('+this.offsetX+','+(this.offsetY+ this.height - 2*this.bSize - this.bPadding/3)+')')
//.attr('transform', 'translate(400,100)')
.attr('width', this.width)
.attr('height', this.bSize+2*this.bPadding);


//Circle button
//const spaceBtwButtons = 3/2*this.margin;
const spaceBtwButtons = 2*this.margin;
buttons.append('circle')
.attr('cx',  this.width/2)
.attr('cy', this.bPadding+this.bSize/2)
.attr('r', 5*this.bSize/8)
.attr('class','highlight')
.on('click', function(){ let contentDiv = document.getElementById("content");
//Empty webpage div display
contentDiv.innerHTML = '';
//Make it invisible so that the emptied div does not block click
contentDiv.classList.remove("onStage");
contentDiv.classList.add("offStage");
topBar.classList.remove("invisible");
phone.page=null;

phone.flipToPhone();
});

//Rectangle button

buttons.append('rect')
.attr('x',  this.width/2 + spaceBtwButtons - this.bSize/2)
//.attr('y', this.height - this.margin/2 - this.bSize/2)
.attr('y', this.bPadding)
.attr('width', this.bSize)
.attr('height', this.bSize)
.attr('class','highlight');

// §ngle button
const lineGenerator = d3.line()
.x(d => d.x)
.y(d => d.y);

//const triWidth =  3*this.size/16;
//const triHeight = this.size/4;
const triWidth =  this.bSize;
const triHeight = 4*this.bSize/3;
const triStart = [ this.width/2 - spaceBtwButtons + triWidth/2,
	(this.bSize-triHeight)/2+this.bPadding];
	const triData = [ {"x": triStart[0], "y": triStart[1]},
	{"x": triStart[0], "y": triStart[1]+triHeight},
	{"x": triStart[0]-triWidth, "y": triStart[1]+triHeight/2},
	{"x": triStart[0], "y": triStart[1]}];
	buttons.append("path")
	.attr("d", lineGenerator(triData))
	.attr('class','highlight')
	.on('click', function (){

		if (phone.page)
		{
			let contentDiv = document.getElementById("content");
			contentDiv.innerHTML='<iframe class="frame" src="html/'+phone.page+'.html"></iframe>'
			phone.rescaleContent();
		}
	});


	/*function highlight(d, i)
	{
	d3.select(this).style("fill", "orange");
}

function dehighlight(d, i) {
d3.select(this).style("fill", "none")
}*/

/*function handleMouseOver(d, i) {  // Add interactivity
// Use D3 to select element, change color and size

d3.select(this).style("fill", "orange");
d3.select(this).attr("width", this.width);
}

function handleMouseOut(d, i) {
// Use D3 to select element, change color back to normal
d3.select(this).style("fill", "gray");
}*/
}
empty()
{
	let buttons = d3.select('#buttons');
	buttons.selectAll("*").remove();
	let appAndText = d3.selectAll('.temporary');
	appAndText.remove();
	let border = document.getElementById("border");
	border.remove();
}

}
