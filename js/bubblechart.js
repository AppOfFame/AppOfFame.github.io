var diamdiam = 300,
    bigdiam = 900,
    format = d3.format(",d"),
    color = d3.scaleOrdinal(d3.schemeCategory20c);

var bubble = d3.pack()
    .size([diamdiam, diamdiam])
    .padding(1.5);

var bubbleBig = d3.pack()
    .size([bigdiam, bigdiam])
    .padding(1.5);

var color = ['#db5f57',
 '#db6f57',
 '#db8057',
 '#db9057',
 '#dba157',
 '#dbb257',
 '#dbc257',
 '#dbd357',
 '#d3db57',
 '#c3db57',
 '#b2db57',
 '#a2db57',
 '#91db57',
 '#80db57',
 '#70db57',
 '#5fdb57',
 '#57db5f',
 '#57db6f',
 '#57db80',
 '#57db90',
 '#57dba1',
 '#57dbb2',
 '#57dbc2',
 '#57dbd3',
 '#57d3db',
 '#57c3db',
 '#57b2db',
 '#57a2db',
 '#5791db',
 '#5780db',
 '#5770db',
 '#575fdb',
 '#5f57db',
 '#6f57db',
 '#8057db',
 '#9057db',
 '#a157db',
 '#b257db',
 '#c257db',
 '#d357db',
 '#db57d3',
 '#db57c3',
 '#db57b2',
 '#db57a2',
 '#db5791',
 '#db5780',
 '#db5770',
 '#db575f']


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
