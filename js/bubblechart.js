var diamdiam = 300,
    bigdiam = 800,
    format = d3.format(",d"),
    color = d3.scaleOrdinal(d3.schemeCategory20c);

var bubble = d3.pack()
    .size([diamdiam, diamdiam])
    .padding(1.5);

var bubbleBig = d3.pack()
    .size([bigdiam, bigdiam])
    .padding(1.5);

var color = ["#34368D", "#B4A8BD", "#00A6AA", "#452C2C", "#636375", "#A3C8C9", "#FF913F", "#938A81",
        "#575329", "#00FECF", "#B05B6F", "#8CD0FF", "#3B9700", "#04F757", "#C8A1A1", "#1E6E00",
        "#7900D7", "#A77500", "#6367A9", "#A05837", "#6B002C", "#772600", "#D790FF", "#9B9700",
        "#83AB58", "#001C1E", "#4287f5", "#004B28", "#C8D0F6", "#A3A489", "#806C66", "#222800",
        "#BF5650", "#E83000", "#66796D", "#DA007C", "#FF1A59", "#8ADBB4", "#1E0200", "#5B4E51",
        "#C895C5", "#320033", "#FF6832", "#66E1D3", "#CFCDAC", "#D0AC94", "#7ED379", "#012C58"]


// PAID SMALL
var svgPaidSmall = d3.select("#bubblePaidSmall").append("svg")
    .attr("width", diamdiam)
    .attr("height", diamdiam)
    .attr("class", "bubble");

d3.json("../data/bubblePaid.txt", function(error, root){
  var nodes = d3.hierarchy(root)
           .sort( function(a, b) {
                    var threshold = 0;
                    if ((a.data.size> threshold) && (b.data.size > threshold)) {
                        return -(a.data.size - b.data.size);
                    } else {
                        return -1;
                    }
    }).sum(function(d) { return d.size; });
          var node = svgPaidSmall.selectAll(".node")
                .data(bubble(nodes).descendants()
                .filter(function(d) { return !d.children; }))
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

          node.append("circle")
              .attr("r", function(d) { return d.r; })
              .style("fill",  function(d, i) {return color[i]; });

  node.append("text")
      .text(
        function(d) { return d.data.name + ": " + (d.value*100).toFixed(1)+ "%"; }
      )
      .attr("font-size", function(d){return d.r/5.5;})
      .attr("dy", ".3em")
      .attr("fill", "white")
      .style("text-anchor", "middle")
     // .text(function(d) { return d.className.substring(0, d.r / 3); });
});


// PAID BIG
var svgPaidBig = d3.select("#bubblePaidBig").append("svg")
    .attr("width", bigdiam)
    .attr("height", bigdiam)
    .attr("class", "bubble");

d3.json("../data/bubblePaid.txt", function(error, root){
  var nodes = d3.hierarchy(root)
           .sort( function(a, b) {
                    var threshold = 0;
                    if ((a.data.size> threshold) && (b.data.size > threshold)) {
                        return -(a.data.size - b.data.size);
                    } else {
                        return -1;
                    }
    }).sum(function(d) { return d.size; });
          var node = svgPaidBig.selectAll(".node")
                .data(bubbleBig(nodes).descendants()
                .filter(function(d) { return !d.children; }))
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

          node.append("circle")
              .attr("r", function(d) { return d.r; })
              .style("fill",  function(d, i) {return color[i]; });

  node.append("text")
      .text(
        function(d) { return d.data.name + ": " + (d.value*100).toFixed(1)+ "%"; }
      )
      .attr("font-size", function(d){return d.r/5.5;})
      .attr("dy", ".3em")
      .attr("fill", "white")
      .style("text-anchor", "middle")
     // .text(function(d) { return d.className.substring(0, d.r / 3); });
});


// ADS SMALL
var svgAdsSmall = d3.select("#bubbleAdsSmall").append("svg")
    .attr("width", diamdiam)
    .attr("height", diamdiam)
    .attr("class", "bubble");

d3.json("../data/bubbleAds.txt", function(error, root){
  var nodes = d3.hierarchy(root)
           .sort( function(a, b) {
                    var threshold = 0;
                    if ((a.data.size> threshold) && (b.data.size > threshold)) {
                        return -(a.data.size - b.data.size);
                    } else {
                        return -1;
                    }
    }).sum(function(d) { return d.size; });
          var node = svgAdsSmall.selectAll(".node")
                .data(bubble(nodes).descendants()
                .filter(function(d) { return !d.children; }))
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

          node.append("circle")
              .attr("r", function(d) { return d.r; })
              .style("fill",  function(d, i) {return color[i]; });

  node.append("text")
      .text(
        function(d) { return d.data.name + ": " + (d.value*100).toFixed(1)+ "%"; }
      )
      .attr("font-size", function(d){return d.r/5.5;})
      .attr("dy", ".3em")
      .attr("fill", "white")
      .style("text-anchor", "middle")
     // .text(function(d) { return d.className.substring(0, d.r / 3); });
});


// ADS BIG
var svgAdsBig = d3.select("#bubbleAdsBig").append("svg")
    .attr("width", bigdiam)
    .attr("height", bigdiam)
    .attr("class", "bubble");

d3.json("../data/bubbleAds.txt", function(error, root){
  var nodes = d3.hierarchy(root)
           .sort( function(a, b) {
                    var threshold = 0;
                    if ((a.data.size> threshold) && (b.data.size > threshold)) {
                        return -(a.data.size - b.data.size);
                    } else {
                        return -1;
                    }
    }).sum(function(d) { return d.size; });
          var node = svgAdsBig.selectAll(".node")
                .data(bubbleBig(nodes).descendants()
                .filter(function(d) { return !d.children; }))
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

          node.append("circle")
              .attr("r", function(d) { return d.r; })
              .style("fill",  function(d, i) {return color[i]; });

  node.append("text")
      .text(
        function(d) { return d.data.name + ": " + (d.value*100).toFixed(1)+ "%"; }
      )
      .attr("font-size", function(d){return d.r/5.5;})
      .attr("dy", ".3em")
      .attr("fill", "white")
      .style("text-anchor", "middle")
     // .text(function(d) { return d.className.substring(0, d.r / 3); });
});


// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root)
{
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size});
  }

  recurse(null, root);
  return {children: classes};
}
/*
d3.select(self.frameElement).style("height", diamdiam + "px");
*/
