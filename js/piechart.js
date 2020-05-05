var myDuration = 600;
var firstTime = true;

var width = 960,
height = 500,
radius = Math.min(width, height) / 2;

var width = 960,
height = 500,
radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal(d3.schemeCategory20);
var pie = d3.pie()
.value(function(d) { return d.Count; })
.sort(null);

var arc = d3.arc()
.innerRadius(0)
.outerRadius(radius - 20);

var svg = d3.select("body").select("#my_dataviz").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");




d3.csv("containsAds.tsv", type, function(error, data) {
  var regionsByFruit = d3.nest()
  .key(function(d) { return d.Category; })
  .entries(data)
  .reverse();

  //add the options to the button
  var select  = d3.select("#selectButton").on("change", change);
  var options = select.selectAll('option').data(regionsByFruit);

  options.enter().append("option")
  .text(function(d) { return d.key; })
  .attr("value",function(d){return d.key;});
change();
function change() {
  var selectedIndex = select.property('selectedIndex');
  var data          = options._enter[0][selectedIndex].__data__;
  var path = svg.selectAll("path");
  var text = svg.selectAll("text");

  var data0 = path.data(),
  data1 = pie(data.values);


    path = path.data(data1, key);
  text = text.data(data1, key)

  console.log(text)
  path.transition()
      .duration(myDuration)
      .attrTween("d", arcTween)

  path.enter()
      .append("path")
      .each(function(d, i) {
        var narc = findNeighborArc(i, data0, data1, key) ;
        if(narc) {
          this._current = narc;
          this._previous = narc;
        } else {
          this._current = d;
        }
      })
      .attr("fill", function(d,i) {
        return color(d.data.Ads_or_not)
      })
      .transition()
      .duration(myDuration)
      .attrTween("d", arcTween)

  path.exit()
      .transition()
      .duration(myDuration)
      .attrTween("d", function(d, index) {

      var currentIndex = this._previous.data.Ads_or_not;
      var i = d3.interpolateObject(d,this._previous);
      return function(t) {
        return arc(i(t))
      }

    })
    .remove()
    if(firstTime){
      svg.selectAll('mySlices')
      .data(data1)
      .enter()
      .append('text')
      .text(function(d){ return d.data.Ads_or_not})
      .attr("transform", function(d) { console.log(data1); return "translate(" + arc.centroid(d) + ")";  })
      .style("text-anchor", "middle")
      .style("font-size", 17)
    }else {
      console.log(path);
      svg.selectAll('mySlices')
      .data(data1)
      .enter()
      .selectAll('text')
      .text(function(d){ return d.data.Ads_or_not})
      .attr("transform", function(d) { console.log(data1); return "translate(" + arc.centroid(d) + ")";  })
      .style("text-anchor", "middle")
      .style("font-size", 17)
    }
    }
    firstTime = false;

});

function key(d) {
  return d.data.Ads_or_not;
}

function type(d) {
  d.Count = +d.Count;
  return d;
}

function findNeighborArc(i, data0, data1, key) {
  var d;
  if(d = findPreceding(i, data0, data1, key)) {

    var obj = cloneObj(d)
    obj.startAngle = d.endAngle;
    return obj;

  } else if(d = findFollowing(i, data0, data1, key)) {

    var obj = cloneObj(d)
    obj.endAngle = d.startAngle;
    return obj;

  }

  return null


}

// Find the element in data0 that joins the highest preceding element in data1.
function findPreceding(i, data0, data1, key) {
var m = data0.length;
while (--i >= 0) {
  var k = key(data1[i]);
  for (var j = 0; j < m; ++j) {
    if (key(data0[j]) === k) return data0[j];
  }
}
}

// Find the element in data0 that joins the lowest following element in data1.
function findFollowing(i, data0, data1, key) {
var n = data1.length, m = data0.length;
while (++i < n) {
  var k = key(data1[i]);
  for (var j = 0; j < m; ++j) {
    if (key(data0[j]) === k) return data0[j];
  }
}
}

function arcTween(d) {

var i = d3.interpolate(this._current, d);

this._current = i(0);

return function(t) {
  return arc(i(t))
}

}


function cloneObj(obj) {
var o = {};
for(var i in obj) {
  o[i] = obj[i];
}
return o;
}
