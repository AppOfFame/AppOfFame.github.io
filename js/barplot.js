// set the dimensions and margins of the graph
var margin = {top: 50, right: 30, bottom: 70, left: 60},
    width = 690 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
const colorThief = new ColorThief();
// append the svg object to the body of the page
var svg = d3.select("#barplot")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}
// Initialize the X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .padding(0.2);
var alpha = 0.5
var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")
var showTooltip = function(d) {
  console.log(d3.select(".tooltip").style("width").slice(0, -2))

    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Name: " + d["Name"]+'<br/>'+"Score: "  + d[alpha.toString()].slice(0,4)+"%")
      .style("left", ((d3.event.pageX)) + "px")
      .style("top", ((d3.event.pageY)-200) + "px")

  }
  var moveTooltip = function(d) {
    tooltip
    .style("left", ((d3.event.pageX)) + "px")
    .style("top", ((d3.event.pageY)-200) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
      .style("opacity", 0)
  }
    // Define the div for the tooltip
var tooltip = d3.select("#barplot")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("color", "white")
// Initialize the Y axis
var y = d3.scaleLinear()
  .range([ height, 0]);
var yAxis = svg.append("g")
  .attr("class", "myYaxis")
async function loadImages(imageUrlArray) {
    var color=[]
    const promiseArray = []; // create an array for promises
    const imageArray = []; // array for the images
    var i=0;
    for (let imageUrl of imageUrlArray) {

        promiseArray.push(new Promise(resolve => {

            const img = new Image();
            let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';
            img.crossOrigin = 'Anonymous';
            img.src = googleProxyURL + encodeURIComponent(imageUrl);
            imageArray.push(img);
            if (img.complete) {
              // do stuff with the image if necessary
              color[imageUrlArray.indexOf(decodeURIComponent(img.src.replace(googleProxyURL,'')))] = rgbToHex(colorThief.getColor(img)).toString(16)
              // resolve the promise, indicating that the image has been loaded
              resolve();
            } else {

              img.addEventListener('load',function(){
                // do stuff with the image if necessary
              color[imageUrlArray.indexOf(decodeURIComponent(img.src.replace(googleProxyURL,'')))] = rgbToHex(colorThief.getColor(img)).toString(16)
                // resolve the promise, indicating that the image has been loaded
                resolve();
              })
              img.addEventListener('error', function() {
                color[imageUrlArray.indexOf(decodeURIComponent(img.src.replace(googleProxyURL,'')))] = '#000000'
                // resolve the promise, indicating that the image has been loaded
                resolve();
              })
            }
        }));

    }

    await Promise.all(promiseArray); // wait for all the images to be loaded
    console.log("all images loaded");
    return color;
}
// A function that create / update the plot for a given variable:
function update(selectedVar) {

  // Parse the Data
  d3.csv("../data/facebook_barplot.csv", function(data) {

    // sort data
      data.sort(function(b, a) {
        return a[selectedVar] - b[selectedVar];
      });
    // X axis
    x.domain(data.filter(function(d) {if(d[selectedVar]){
      return true;
    }
  return false}).map(function(d) {return d.Name}).slice(0,20))
    xAxis.transition().duration(1000).call(d3.axisBottom(x).tickFormat((domainn,number)=>{return ""}))



  // Add Y axis
  y.domain([d3.min(data.slice(0,20), function(d) {  return d[selectedVar] })-0.05, d3.max(data.slice(0,20), function(d) { return d[selectedVar] }) ]);
  yAxis.transition().duration(1000).call(d3.axisLeft(y));

  // variable u: map data to existing bars

  var url=[]
  data.slice(0,20).forEach((d, i) => {
    url.push(d.icon)
  });
  var color =[]
  loadImages(url).then(images => {
      images.forEach((item, i) => {
        color.push(item)

    // update bars
    var u = svg.selectAll("rect")
      .data(data.slice(0,20))
    u
      .enter()
      .append("rect")
      .merge(u)
      .on("mouseover", showTooltip )
      .on("mousemove", moveTooltip )
      .on("mouseleave", hideTooltip )
      .transition()
      .duration(1000)
        .attr("x", function(d) { return x(d.Name); })
        .attr("y", function(d) { return y(d[selectedVar]); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d[selectedVar]); })
        .attr("fill", function(d,i){return color[i]})
      // If less group in the new dataset, I delete the ones not in use anymore
     u
       .exit()
       .remove()
       var u = svg.selectAll("image")
         .data(data.slice(0,20))
       u.enter()
           .append('image')
           .merge(u)
           .attr('xlink:href', function (d) {return d.icon; })
           .transition()
           .duration(1000)
           .attr("width", x.bandwidth())
           .attr("height", x.bandwidth())
           .attr("y", function (d) {return y(d[selectedVar]) - 50; })
           .attr("x", function (d) { return x(d.Name); })
           .attr("preserveAspectRatio", "none");
       u
         .exit()
         .remove()
    })
  });
});
}
// Initialize plot
update(0.5)

var slider = d3.select('#alpha');
slider.on('change', function() {
  alpha = this.value;
  update(this.value);
  if(this.value>0.5){
    d3.select('#alpha_selected').text('More importance for Installs')
  }else if(this.value == 0.5){
    d3.select('#alpha_selected').text('Equal weight for Installs and Ratings')
  }else{
    d3.select('#alpha_selected').text('More importance for Ratings')
  }
});
