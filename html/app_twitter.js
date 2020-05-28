$(document).ready(function() {

  // Load hashtags
  d3.csv("../data/word_size.csv").then(function(data) {
    data.forEach(function(d) {
      $("#appendhashtags").append(
        '<div class="row hashtag">' +
          '<div class="col-4">' +
            '<div class="hashtag-name"><span class="extraBold">#' + d.word + '</span></div>' +
            '<div class="hashtag-tweets">' + d.size + ' Tweets</div>' +
          '</div>' +
          '<div class="col-8 align-self-center" id="' + d.word + '">' +
          '</div>' +
        '</div>'
      );
    });
  });


  // Reacts hover
  // Hover comment
  $(".react-com")
  .mouseover(function() {
    $(this).css({"color":"#1DA1F2"});
  })
  .mouseout(function() {
    $(this).css({"color":"#657786"});
    if (!$('#com1').hasClass('clicked')) {
      $(this).css({"color":"#657786"});
    }
    if (!$('#com2').hasClass('clicked')) {
      $(this).css({"color":"#657786"});
    }
  });

  // Hover retweet
  $(".react-ret")
  .mouseover(function() {
    $(this).css({"color":"mediumseagreen"});
  })
  .mouseout(function() {
    if (!$(this).hasClass('clicked')) {
      $(this).css({"color":"#657786"});
    }
  });

  // Hover like
  $(".react-like")
  .mouseover(function() {
    $(this).css({"color":"crimson"});
  })
  .mouseout(function() {
    if (!$(this).hasClass('clicked')) {
      $(this).css({"color":"#657786"});
    }
  });


  // Reacts click
  // Click retweet
  $('body').on('click','#ret1',function(){
    if ($('#ret1').hasClass('clicked')) {
      // Remove retweet
      $(this).removeClass('clicked');
      $(this).css({"color":"#657786"});
      $("#nret1").text(" 1071");
    }
    else{
      // Retweet
      $(this).addClass('clicked');
      $(this).css({"color":"mediumseagreen"});
      $("#rret1").addClass('animated heartBeat').one('animationend', function(){
        $(this).removeClass('animated heartBeat');
      });
      $("#nret1").text(" 1072");
    }
  });
  $('body').on('click','#ret2',function(){
    if ($('#ret2').hasClass('clicked')) {
      // Remove retweet
      $(this).removeClass('clicked');
      $(this).css({"color":"#657786"});
      $("#nret2").text(" 4203");
    }
    else{
      // Retweet
      $(this).addClass('clicked');
      $(this).css({"color":"mediumseagreen"});
      $("#rret2").addClass('animated heartBeat').one('animationend', function(){
        $(this).removeClass('animated heartBeat');
      });
      $("#nret2").text(" 4204");
    }
  });

  // Click like
  $('body').on('click','#like1',function(){
    if ($('#like1').hasClass('clicked')) {
      // Remove like
      $(this).removeClass('clicked');
      $(this).css({"color":"#657786"});
      $("#rlike1").attr("class", 'far fa-heart');
      $("#nlike1").text(" 5236");
    }
    else{
      // Like
      $(this).addClass('clicked');
      $(this).css({"color":"crimson"});
      $("#rlike1").attr("class", 'fas fa-heart');
      $("#rlike1").addClass('animated heartBeat').one('animationend', function(){
        $(this).removeClass('animated heartBeat');
      });
      $("#nlike1").text(" 5237");
    }
  });
  $('body').on('click','#like2',function(){
    if ($('#like2').hasClass('clicked')) {
      // Remove like
      $(this).removeClass('clicked');
      $(this).css({"color":"#657786"});
      $("#rlike2").attr("class", 'far fa-heart');
      $("#nlike2").text(" 6810");
    }
    else{
      // Like
      $(this).addClass('clicked');
      $(this).css({"color":"crimson"});
      $("#rlike2").attr("class", 'fas fa-heart');
      $("#rlike2").addClass('animated heartBeat').one('animationend', function(){
        $(this).removeClass('animated heartBeat');
      });
      $("#nlike2").text(" 6811");
    }
  });


  // Tabs
  $(".tab-home").css({"color":"#1DA1F2"});
  $("#home").css({"color":"#1DA1F2"});
  // Home click
  $('body').on('click','.tab-home',function(){
    $(window).scrollTop(0);

    $(".tab-home").css({"color":"#1DA1F2"});
    $("#home").css({"color":"#1DA1F2"});
    $(".tab-bell").css({"color":"#657786"});
    $("#bell").css({"color":"#657786"});
    $(".tab-explore").css({"color":"#657786"});
    $("#exp").css({"color":"#657786"});
    $(".tab-msg").css({"color":"#657786"});
    $("#msg").css({"color":"#657786"});

    $("#tabdisp1").css({"display":"block"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"none"});
    $("#tabdisp4").css({"display":"none"});
  });
  // Explore click
  $('body').on('click','.tab-explore',function(){
    $(window).scrollTop(0);

    $(".tab-home").css({"color":"#657786"});
    $("#home").css({"color":"#657786"});
    $(".tab-bell").css({"color":"#657786"});
    $("#bell").css({"color":"#657786"});
    $(".tab-explore").css({"color":"#1DA1F2"});
    $("#exp").css({"color":"#1DA1F2"});
    $(".tab-msg").css({"color":"#657786"});
    $("#msg").css({"color":"#657786"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"block"});
    $("#tabdisp3").css({"display":"none"});
    $("#tabdisp4").css({"display":"none"});
  });
  // Bell click
  $('body').on('click','.tab-bell',function(){
    $(window).scrollTop(0);

    $(".tab-home").css({"color":"#657786"});
    $("#home").css({"color":"#657786"});
    $(".tab-bell").css({"color":"#1DA1F2"});
    $("#bell").css({"color":"#1DA1F2"});
    $(".tab-explore").css({"color":"#657786"});
    $("#exp").css({"color":"#657786"});
    $(".tab-msg").css({"color":"#657786"});
    $("#msg").css({"color":"#657786"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"block"});
    $("#tabdisp4").css({"display":"none"});
  });
  // Message click
  $('body').on('click','.tab-msg',function(){
    $(".tab-home").css({"color":"#657786"});
    $("#home").css({"color":"#657786"});
    $(".tab-bell").css({"color":"#657786"});
    $("#bell").css({"color":"#657786"});
    $(".tab-explore").css({"color":"#657786"});
    $("#exp").css({"color":"#657786"});
    $(".tab-msg").css({"color":"#1DA1F2"});
    $("#msg").css({"color":"#1DA1F2"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"none"});
    $("#tabdisp4").css({"display":"block"});
  });


  // To trends click
  $('body').on('click','#totrends',function(){
    $(window).scrollTop(0);

    $(".tab-home").css({"color":"#657786"});
    $("#home").css({"color":"#657786"});
    $(".tab-bell").css({"color":"#657786"});
    $("#bell").css({"color":"#657786"});
    $(".tab-explore").css({"color":"#1DA1F2"});
    $("#exp").css({"color":"#1DA1F2"});
    $(".tab-msg").css({"color":"#657786"});
    $("#msg").css({"color":"#657786"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"block"});
    $("#tabdisp3").css({"display":"none"});
    $("#tabdisp4").css({"display":"none"});
  });


  // Graphs
  var margin = {top: 10, right: 30, bottom: 10, left: 50},
      width = 500 - margin.left - margin.right,
      height = 40 - margin.top - margin.bottom;
      // get the dom element width
  function getDivWidth (div) {
    var width = d3.select(div)
      // get the width of div element
      .style('width')
      // take of 'px'
      .slice(0, -2)
    // return as an integer
    return Math.round(Number(width))
  }
var showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Category: " + d[0]+'<hr/>'+"Percentage: " + d[1].slice(0,4) +"%")
      .style("left", ((d3.event.pageX)- d3.select(".tooltip").style("width").slice(0, -2) - 10) + "px")
      .style("top", ((d3.event.pageY)-d3.select(".tooltip").style("height").slice(0, -2)- 10) + "px")

  }
  var moveTooltip = function(d) {
    tooltip
    .style("left", ((d3.event.pageX)- d3.select(".tooltip").style("width").slice(0, -2)-10) + "px")
    .style("top", ((d3.event.pageY)-d3.select(".tooltip").style("height").slice(0, -2)-10) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }
  // Define the div for the tooltip
  var tooltip = d3.select("#appendhashtags")
      .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background-color", "black")
        .style("border-radius", "5px")
        .style("padding", "5px")
        .style("color", "white")

  d3.csv("../data/category_usage_filtered_other.csv").then(function(data) {

    var categories = data.columns.slice(1);

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    var words = d3.map(data, function(d){return(d.word)}).keys()

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
      .domain(categories)
      .range(["#34368D", "#B4A8BD", "#00A6AA", "#452C2C", "#636375", "#A3C8C9", "#FF913F", "#938A81",
              "#575329", "#00FECF", "#B05B6F", "#8CD0FF", "#3B9700", "#04F757", "#C8A1A1", "#1E6E00",
              "#7900D7", "#A77500", "#6367A9", "#A05837", "#6B002C", "#772600", "#D790FF", "#9B9700",
              "#83AB58", "#001C1E", "#4287f5", "#004B28", "#C8D0F6", "#A3A489", "#806C66", "#222800",
              "#BF5650", "#E83000", "#66796D", "#DA007C", "#FF1A59", "#8ADBB4", "#1E0200", "#5B4E51",
              "#C895C5", "#320033", "#FF6832", "#66E1D3", "#CFCDAC", "#D0AC94", "#7ED379", "#012C58"])

for(i = 0; i<50;i++){
    // Show the bars
    var sortable = [];
    for (key in data[i]) {
        if(key.localeCompare("Other")){
          sortable.push([key, data[i][key]]);
        }

    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    sortable.push(["Other", data[i]["Other"]]);
    var svg = d3.select("#" + data[i].word).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")

      svg.append("g")
      .selectAll("g")
      .data(sortable.slice(1,40))
      .enter()
      .append("rect")
      .attr("fill", function(d) {return color(d[0]); })
      .attr("x", function(d,i) {
        if(i!=0){
          var before = 0
          for(previous = 1; previous < i+1; previous++){
            before = before + parseFloat(sortable[previous][1])
          }
          return (before/100)*width; }
          else{ return 0;}

      })
      .attr("y", 0)
      .attr("height", height)
      .attr("width",function(d) { return (d[1]/100)*width })
      .on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )

  }
  });
});
