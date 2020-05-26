// set the margins of the graph
var margin = {top: 50, right: 30, bottom: 70, left: 60},
width = 690 - margin.left - margin.right,
height= 600 - margin.top - margin.bottom;
const colorThief = new ColorThief();

// append the svg_barplot object to the body of the page
var svg_barplot = d3.select("#barplot")
                    .classed("svg-container", true)
                    .append("svg")
                    .attr("width", 690)
                    .attr("height", 600)
                    .attr("preserveAspectRatio", "xMinYMin meet")
                    .attr("viewBox", "0 0 690 600")
                    .classed("svg-content-responsive", true)
                    .append("g")
                    .attr("transform","translate(" + margin.left + "," + margin.top + ")");

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
    return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}
// Initialize the X axis
var x_barplot= d3.scaleBand().range([ 0, width ]).padding(0.2);
var alpha = 0.5
var xAxis_barplot = svg_barplot.append("g").attr("transform", "translate(0," + height + ")")
// Initialize the Y axis
var y_barplot = d3.scaleLinear().range([ height, 0]);
var yAxis_barplot = svg_barplot.append("g").attr("class", "myYaxis")
var showTooltip = function(d) {
  tooltip
    .transition()
    .duration(200)
  tooltip
    .style("opacity", 1)
    .html("Name: " + d["Name"]+'<br/>'+"Score: "  + d[alpha.toString()].slice(0,4)+"%")
    .style("left", ((d3.event.pageX)+10) + "px")
    .style("top", ((d3.event.pageY)) + "px")

}
var moveTooltip = function(d) {
  tooltip
  .style("left", ((d3.event.pageX)+10) + "px")
  .style("top", ((d3.event.pageY)) + "px")
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
async function loadImages(imageUrlArray) {
  var color=[]
  const promiseArray = []; // create an array for promises
  const imageArray = []; // array for the images
  var i=0;
  for (let imageUrl of imageUrlArray) {

      promiseArray.push(new Promise(resolve => {

          const img = new Image();
          img.crossOrigin = 'Anonymous';
          img.src = imageUrl;
          imageArray.push(img);
          if (img.complete) {
            // do stuff with the image if necessary
            color[imageUrlArray.indexOf(img.src)] = rgbToHex(colorThief.getColor(img)).toString(16)
            // resolve the promise, indicating that the image has been loaded
            resolve();
          } else {

            img.addEventListener('load',function(){
              // do stuff with the image if necessary
            color[imageUrlArray.indexOf(img.src)] = rgbToHex(colorThief.getColor(img)).toString(16)
              // resolve the promise, indicating that the image has been loaded
              resolve();
            })
            img.addEventListener('error', function() {
              color[imageUrlArray.indexOf(img.src)] = '#000000'
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
    x_barplot.domain(data.filter(function(d) {
      if(d[selectedVar]){
        return true;
      }
        return false
      }).map(function(d) {return d.Name}).slice(0,20))
    xAxis_barplot.transition().duration(1000).call(d3.axisBottom(x_barplot).tickFormat((domain,number)=>{return ""}))

    // Y axis
    y_barplot.domain([d3.min(data.slice(0,20), function(d) {  return d[selectedVar] })-0.05, d3.max(data.slice(0,20), function(d) { return d[selectedVar] }) ]);
    yAxis_barplot.transition().duration(1000).call(d3.axisLeft(y_barplot));

    // variable bar_barplot: map data to existing bars
    var url=[]
    data.slice(0,20).forEach((d, i) => {
      url.push(d.icon)
    });
    var color =[]
    loadImages(url).then(images => {
        images.forEach((item, i) => {
          color.push(item)

          var bar_barplot = svg_barplot.selectAll("rect")
                                        .data(data.slice(0,20));
          bar_barplot.enter()
                     .append("rect")
                     .merge(bar_barplot)
                     .on("mouseover", showTooltip )
                     .on("mousemove", moveTooltip )
                     .on("mouseleave", hideTooltip )
                     .transition()
                     .duration(1000)
                     .attr("x", function(d) { return x_barplot(d.Name); })
                     .attr("y", function(d) { return y_barplot(d[selectedVar]); })
                     .attr("width", x_barplot.bandwidth())
                     .attr("height", function(d) { return height - y_barplot(d[selectedVar]); })
                     .attr("fill", function(d,i){return color[i]});

        // If less group in the new dataset, delete the ones not in use anymore
         bar_barplot.exit()
                    .remove();
         var image_barplot = svg_barplot.selectAll("image")
                                        .data(data.slice(0,20));
         image_barplot.enter()
                      .append('image')
                      .merge(image_barplot)
                      .attr('xlink:href', function (d) {return d.icon; })
                      .transition()
                      .duration(1000)
                      .attr("width", x_barplot.bandwidth())
                      .attr("height", x_barplot.bandwidth())
                      .attr("y", function (d) {return y_barplot(d[selectedVar]) - 50; })
                      .attr("x", function (d) { return x_barplot(d.Name); })
                      .attr("preserveAspectRatio", "none");
          image_barplot.exit()
                       .remove();
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
