
//Each element will correspond to an app cell in the phone
const r=4;
const chartWidth=500;
const chartHeight=500;
const centerR = 0.4*Math.min(chartWidth, chartHeight)
const smallCenterR = centerR/2;
const centerX = chartWidth/2;
const centerY = chartHeight/2;

let container = document.getElementById("container");
container.style.width = chartWidth+"px";
container.style.height = chartWidth+"px";

//Will be from JSON


class Chart {
	constructor(data, piece)
	{
		this.data=data;
		this.piece=piece;
		this.currentAngle=0;
		this.incrementAngle=0;
		this.angles= new Array(this.data.length);
	}

	assignAngles(nbAppDev,i)
	{
		this.currentAngle += this.incrementAngle/2;
		this.currentAngle = this.currentAngle % (2*Math.PI);

		this.incrementAngle = this.piece*parseInt(nbAppDev);

		this.currentAngle += this.incrementAngle/2;
		this.currentAngle = this.currentAngle % (2*Math.PI);

		this.angles[i] = this.currentAngle;
	}

	update()
	{
		let chart = d3.select("#chart");

		let elementsEnter = chart.selectAll('g')
		.data(this.data)
		.enter()
		.append('g')
		.attr('class','elements')
		.on('mouseover', function(d) {

			updateRadar(d);

			d3.select('#devText')
			.classed('hidden', false)
			.text(d.developer.split(' ').slice(0,2).join(' '))
			.attr('x', centerX-d3.select('#devText').node().getComputedTextLength()/2);


			d3.select('.devBalloon.displayed').classed('displayed', false);
			d3.select('.devPath.displayed').classed('displayed', false);

			d3.select(this).selectAll('g > circle').classed('displayed', true);
			d3.select(this).selectAll('g > path').classed('displayed', true);

			d3.select('#border').attr('visibility', 'hidden');
			d3.select('#infoBorder').classed('displayed', true);
			d3.select('.radarChart').classed('hidden', false);

		});




		/*d3.select(this).selectAll('g > path').classed('displayed', false);});*/

		elementsEnter.append('circle')
		.each((d,i) => this.assignAngles(d.Counts,i))
		.attr('cx', (d,i) => centerX + centerR*Math.cos(this.angles[i]))
		.attr('cy', (d,i) => centerY + centerR*Math.sin(this.angles[i]))
		.attr('r', (d) => r*d.Counts/2)
		.attr("class", 'devBalloon')
		.transition()
		.style('opacity', 1)
		.delay((d,i) => 30*i)
		.duration(2000);


		/*elements.append('text')
		.attr('x', (d,i) => centerX )
		.attr('y', (d,i) => centerY )
		.attr('class', 'devText')
		.text((d) => d.developer)
		//.style('transform', (d,i) => 'rotate(' + this.angles[i] * 360/(2*Math.PI) + 'deg)')
		.transition()
		.style('opacity', 1)
		//.style('--angle', (d,i) => this.angles[i]*360/(2*Math.PI))
		.delay((d,i) => 200*i)
		.duration(2000);*/

		chart.append('circle')
		.attr('cx', centerX)
		.attr('cy', centerY)
		.attr('r', centerR)
		.attr('id', 'border');

		chart.append('circle')
		.attr('cx', centerX)
		.attr('cy', centerY)
		.attr('r', smallCenterR)
		.attr('stroke-width', 2)
		.attr('id', 'infoBorder')
		.on('mouseenter', function() {
			/*d3.select('.devBalloon.displayed').classed('displayed', false);
			d3.select('.devPath.displayed').classed('displayed', false);

			d3.select('#infoBorder').classed('displayed', false);
			d3.select('#border').attr('visibility', 'visible');
			d3.select('#container').style('z-index', '2');*/
			d3.select('#container').style('z-index', '0');
		});

		chart.append('text')
		.attr('x', centerX )
		.attr('y', centerY -1.45*smallCenterR)
		.attr('id', 'devText')
		.text("None")
		.attr('class', 'hidden');



		const lineGenerator = d3.line()
		.x(d => d.x)
		.y(d => d.y);
		elementsEnter.append('path')
		.attr("d", (d,i) =>lineGenerator([ {'x':centerX+(document.getElementsByClassName("devBalloon")[i].getAttribute("cx")-centerX)*smallCenterR/centerR,
		'y':centerY+ (document.getElementsByClassName("devBalloon")[i].getAttribute("cy")-centerY)*smallCenterR/centerR},
		{'x':document.getElementsByClassName("devBalloon")[i].getAttribute("cx"),
		'y':document.getElementsByClassName("devBalloon")[i].getAttribute("cy")} ]))
		.attr("class", 'devPath');


	}
}




d3.csv('../data/devradar.csv').then(function(data) {

	data.forEach(function(d) {
		d.Counts = +d.Counts,
		d.Installs = +d.Installs,
		d.Avg_Rating = +d.Avg_Rating,
		d.inv_Global_rank = +d.inv_Global_rank,
		d.inv_Rank = +d.inv_Rank,
		d.containsAds = +d.containsAds
	});
	console.log(data);

	data = data.slice(1, 50);


	/*data = [
	{name:'App1', counts:'12'},
	{name:'App2', counts:'9'},
	{name:'App3', counts:'8'},
	{name:'App2', counts:'5'},
	{name:'App3', counts:'4'},
	{name:'App1', counts:'4'},
	{name:'App2', counts:'3'},
	{name:'App3', counts:'2'},
	{name:'App2', counts:'1'},
	{name:'App3', counts:'1'}];*/

	const nbAppsTotal = data
	.map((d) => d.Counts)
	.reduce((prev, cur) => +prev + +cur, 0);
	console.log(nbAppsTotal);
	const piece = 2*Math.PI/nbAppsTotal;


	let chart = new Chart(data,piece);
	chart.update();
});









//radarChart : http://bl.ocks.org/nbremer/21746a9668ffdf6d8242
function updateRadar(d)
{
	var margin = {top: 100, right: 100, bottom: 100, left: 100},
	width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
	height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

	//////////////////////////////////////////////////////////////
	////////////////////////// Data //////////////////////////////
	//////////////////////////////////////////////////////////////


	let dataRadar = [
		[//iPhone
			{axis:"Installs",value:d.Installs},
			{axis:"Rating",value:d.Avg_Rating},
			{axis:"Global rank",value:d.inv_Global_rank},
			{axis:"Rank",value:d.inv_Rank},
			{axis:"Contains ads",value:d.containsAds}
		]
	];
	//////////////////////////////////////////////////////////////
	//////////////////// Draw the Chart //////////////////////////
	//////////////////////////////////////////////////////////////

	let color = d3.scaleBand()
	.range(["#EDC951","#CC333F","#00A0B0"]);

	let radarChartOptions = {
		w: chartWidth,
		h: chartHeight,
		margin: margin,
		maxValue: 0.5,
		levels: 5,
		roundStrokes: true,
		color: color
	};
	//Call function to draw the Radar chart
	RadarChart(".radarChart", dataRadar, radarChartOptions);

	d3.select('.radarSVG')

	.attr('width', 2*centerR)
	.attr('y', 0);


	d3.select('.radar')
	.on('mouseleave', function() {
		d3.select('#devText').classed('hidden', true);
		d3.select('.devBalloon.displayed').classed('displayed', false);
		d3.select('.devPath.displayed').classed('displayed', false);

		d3.select('#infoBorder').classed('displayed', false);
		d3.select('#border').attr('visibility', 'visible');
		d3.select('#container').style('z-index', '2');
		d3.select('.radarChart').classed('hidden', true);

	});
}
