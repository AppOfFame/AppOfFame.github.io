function windowUpdate()
{
	iphone.empty();
	iphone.rescale();
}

function initPhone()
{
	data = [ {} ,{},{},{},{},{},{},{},{},
		{name:'Rankings', icon:'facebook.png', file:'app_fb'},
		{name:'Business Plan', icon:'whatsapp.png', file:'app_whats'},
		{name:'Developers', icon:'EPFL.png', file:'app_epfl'},
		{name:'Downloads', icon:'youtube.png', file:'app_ytb'},
		{name:'Comments', icon:'twitter.png', file:'app_twitter'},
		{name:'Conclusion', icon:'wikipedia.png', file:'app_wiki'}];

		iphone = new Phone('monTel', data, [14,9]);
		window.addEventListener("resize", windowUpdate);
		return iphone;
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
			this.nightMode=false;
			this.page=null;
			this.rescale();
		}

		rescale()
		{
			this.contWidth = document.getElementById(this.container).clientWidth;
			this.contHeight = document.getElementById(this.container).clientHeight;
			this.nbCol=Math.round(this.ratio[1]*Math.sqrt(data.length/(this.ratio[0]*this.ratio[1])));
			let sizeFromWidth = this.contWidth/((3*this.nbCol+1)/2);
			let sizeFromHeight = this.contHeight/((3*Math.ceil(data.length/this.nbCol)+3.04)/2);
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

			this.rescaleContent(this);
			this.update(this);
		}


		rescaleContent(phone)
		{
			let contentDiv = document.getElementById("content");
			contentDiv.style.width = this.width-2*this.padding+"px";
			contentDiv.style.height = this.height-2*this.padding+"px";
			contentDiv.style.marginLeft = this.offsetX+this.padding+"px";
			contentDiv.style.marginTop = this.offsetY+this.padding+"px";
			let frame = d3.selectAll(".frame").attr("height", this.height-2*this.bSize-2*this.bPadding);

			let svg = d3.select('#'+this.container);

			if(this.page === null)
			{
				svg.selectAll("image").each(function() {
					d3.select(this)
					.attr("width", phone.size)
					.attr("height", phone.size);
				});
			}

			let datum = document.getElementById("datum");
			datum.style.marginTop = this.offsetY+ 0.12*this.height+"px";
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



			.on('click', function (d,i){

				if(d.file && i<=phone.idDiscover){
					phone.flipToTablet();
					phone.page = d.file
					if(phone.idDiscover<i+1)
					{
						phone.idDiscover =i+1;
					}

					let contentDiv = document.getElementById("content");
					contentDiv.classList.remove("offStage");
					contentDiv.classList.add("onStage");
					contentDiv.innerHTML='<iframe class="frame" src="html/'+phone.page+'.html"></iframe>';
					let frame = d3.selectAll(".frame").attr("height", phone.height-2*phone.bSize-2*phone.bPadding);
					topBar.classList.add("invisible");

					let datum = document.getElementById("datum");
					datum.classList.add("invisible");

					d3.selectAll('.temporary')
					.style('opacity', '0');

					phone.rescaleContent();
				}
			});


			//Text under
			svg.selectAll('text')
			.data(this.data)
			.enter()
			.append('text')
			.attr('class', 'appText temporary')
			.style('fill','#E0E0E0')
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
			.attr('class', this.nightMode ? 'nightMode' : '')
			.style('fill','none');


			//Buttons
			let buttons = d3.select('#buttons')
			.style('-webkit-transform', 'translate('+this.offsetX+','+(this.offsetY+ this.height - 2*this.bSize - this.bPadding/3)+')')
			.attr('transform', 'translate('+this.offsetX+','+(this.offsetY+ this.height - 2*this.bSize - this.bPadding/3)+')')
			//.attr('transform', 'translate(400,100)')
			.attr('width', this.width)
			.attr('height', this.bSize+2*this.bPadding);


			//Circle button
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
			let datum = document.getElementById("datum");
			datum.classList.remove("invisible");
			d3.selectAll('.temporary')
			.style('opacity', '1');
			phone.page=null;

			phone.flipToPhone();
		});

		//Rectangle button

		buttons.append('rect')
		.attr('x',  this.width/2 + spaceBtwButtons - this.bSize/2)
		.attr('y', this.bPadding)
		.attr('width', this.bSize)
		.attr('height', this.bSize)
		.attr('class','highlight')
		.on('click', function(){
			phone.nightMode=true;
			d3.select("#border")
			.node().classList.toggle("nightMode");
			d3.select("body")
			.node().classList.toggle("nightMode");


		});

		// §ngle button
		const lineGenerator = d3.line()
		.x(d => d.x)
		.y(d => d.y);


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
