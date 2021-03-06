var margin = {top: 50, right: 90, bottom: 50, left: 10},
width = 800 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

var dimensions = [
  {
    name: "App",
    scale: d3.scale.ordinal().rangePoints([0, height]),
    type: "string"
  },
  {
    name: "Category",
    scale: d3.scale.ordinal().rangePoints([0, height]),
    type: "string"
  },
  {
    name: "Contains ads",
    scale: d3.scale.ordinal().rangePoints([0, height]),
    type: "string"
  },
  {
    name: "Price",
    scale: d3.scale.ordinal().rangePoints([0, height]),
    type: "string"
  },
  {
    name: "Developer rank",
    scale: d3.scale.linear().range([height, 0]),
      type: "number"
  },
  {
    name: "#Ratings",
    scale: d3.scale.linear().range([height, 0]),
      type: "number"
  },
  /*{
    name: "#Installs",
    scale: d3.scale.linear().range([height, 0]),
      type: "number"
  },*/
  {
    name: "#Installs",
    scale: d3.scale.ordinal().rangePoints([0, height]),
    type: "string"
  },
  {
    name: "Average rating",
    scale: d3.scale.linear().range([height, 0]),
      type: "number"
  },
  {
    name: "Rank",
    scale: d3.scale.linear().range([0, height]),
      type: "number"
  }
];

var x = d3.scale.ordinal().domain(dimensions.map(function(d) { return d.name; })).rangePoints([0, width]),
    y = {},
    dragging = {};

var line = d3.svg.line(),
  axis = d3.svg.axis().orient("left"),
  background,
  foreground;

var svg = d3.select("#superparallel").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var antoine_data
d3.csv("../data/conclusion_data.csv", function(error, data) {
antoine_data= data
  //Create the dimensions depending on attribute "type" (number|string)
  //The x-scale calculates the position by attribute dimensions[x].name
  dimensions.forEach(function(dimension) {
    if (dimension.name === '#Installs'){
      dimension.scale.domain(['5000000000.0','1000000000.0','500000000.0','100000000.0','50000000.0','10000000.0']);
    }
    else if (dimension.name === 'Name') {
      dimension.scale.domain(dimension.type === "number"
        ? d3.extent(data, function(d) { return +d[dimension.name]; })
        : data.map(function(d) { return d[dimension.name]; }).sort());
    }
    else {

      dimension.scale.domain(dimension.type === "number"
        ? d3.extent(data, function(d) { return +d[dimension.name]; })
        : data.map(function(d) { return d[dimension.name]; }).sort());
    }
  });

  // Add grey background lines for context.
  background = svg.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(data)
    .enter().append("path")
      .attr("d", path);

  // Add blue foreground lines for focus.
  foreground = svg.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(data)
    .enter().append("path")
      .attr("d", path)
      .attr('stroke', function(d) { return d.Color; })
      .attr('stroke-width', function(d) { return 1; });

  // Add a group element for each dimension.
  var g = svg.selectAll(".dimension")
        .data(dimensions)
      .enter().append("g")
        .attr("class", "dimension")
        .attr("transform", function(d) { return "translate(" + x(d.name) + ")"; })
      .call(d3.behavior.drag()
          .origin(function(d) { return {x: x(d.name)}; })
        .on("dragstart", function(d) {
          dragging[d.name] = x(d.name);
          background.attr("visibility", "hidden");
        })
        .on("drag", function(d) {
          dragging[d.name] = Math.min(width, Math.max(0, d3.event.x));
          foreground.attr("d", path);
          dimensions.sort(function(a, b) { return position(a) - position(b); });
          x.domain(dimensions.map(function(d) { return d.name; }));
          g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
        })
        .on("dragend", function(d) {
          delete dragging[d.name];
          transition(d3.select(this)).attr("transform", "translate(" + x(d.name) + ")");
          transition(foreground).attr("d", path);
          background
            .attr("d", path)
            .transition()
              .delay(500)
              .duration(0)
              .attr("visibility", null);
        })
      );


  // Add an axis and title.
  g.append("g")
      .attr("class", "axis")
    .each(function(d) {
      if (d.name === 'Name'){
        'bite';
      }
      d3.select(this).call(axis.scale(d.scale));
    })
      .append("text")
        .style("text-anchor", "middle")
        .attr("class", "axis-label")
        .attr("y", -19)
        .text(function(d) {
          return d.name;
        });
        console.log(d3.select(".dimension .axis"))
        d3.select(".dimension .axis").selectAll("g").style("display", "none");
  // Add and store a brush for each axis.
  g.append("g")
      .attr("class", "brush")
    .each(function(d) {
      d3.select(this).call(d.scale.brush = d3.svg.brush().y(d.scale).on("brushstart", brushstart).on("brush", brush));
    })
    .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);
});

function position(d) {
  var v = dragging[d.name];
  return v == null ? x(d.name) : v;
}

function transition(g) {
  return g.transition().duration(500);
}

// Returns the path for a given data point.
function path(d) {
  //return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
  return line(dimensions.map(function(dimension) {
    var v = dragging[dimension.name];
    var tx = v == null ? x(dimension.name) : v;
    return [tx, dimension.scale(d[dimension.name])];
  }));
}

function brushstart() {
  d3.event.sourceEvent.stopPropagation();
}
function search(selection,str) {
  pattern = new RegExp(str,"i")
  console.log(pattern)
  return _(selection).filter(function(d) { return pattern.exec(d.name); });
}
// d3.select("#search").on("keyup", brush_bis);
// function brush_bis() {
//   console.log("call")
//   // free text search
//     var selected = [];
//     antoine_data
//     .filter(function(d) {
//       return !contains(excluded_groups, d.group);
//     })
//     .map(function(d) {
//       return actives.every(function(p, dimension) {
//         return extents[dimension][0] <= d[p] && d[p] <= extents[dimension][1];
//       }) ? selected.push(d) : null;
//     });
//
//     var query = d3.select("#search")[0][0].value;
//     if (query.length > 0) {
//       selected = search(selected, query);
//     }
//     console.log(selected)
//
// }
// Handles a brush event, toggling the display of foreground lines.
function brush() {

  var actives = dimensions.filter(function(p) {console.log(p); return !p.scale.brush.empty(); }),
    extents = actives.map(function(p) { return p.scale.brush.extent(); });

  foreground.style("display", function(d) {
    return actives.every(function(p, i) {
      if(p.type==="number"){
        return extents[i][0] <= parseFloat(d[p.name]) && parseFloat(d[p.name]) <= extents[i][1];
      }else{
        return extents[i][0] <= p.scale(d[p.name]) && p.scale(d[p.name]) <= extents[i][1];
      }
    }) ? null : "none";
  });
}
