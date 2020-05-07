// Animations on page load
window.onload = function() {
  // Tabs
  var s1 = document.getElementById("symb1")
  var s2 = document.getElementById("symb2")
  var s3 = document.getElementById("symb3")
  var t1 = document.getElementById("tab1")
  var t2 = document.getElementById("tab2")
  var t3 = document.getElementById("tab3")

  s1.style.marginLeft = "5px";
  s2.style.marginLeft = "5px";
  s3.style.marginLeft = "5px";
  t1.style.marginLeft = "0px";
  t2.style.marginLeft = "0px";
  t3.style.marginLeft = "0px";
};


$(document).ready(function() {

  $("#tabdisp1").toggle("fast")
  $("#tabclick1").css("pointer-events", "none");

  $("#tabclick1").click(function() {
    $("#tabdisp1").toggle("fast")
    $("#tabclick1").css("pointer-events", "none");
    $("#tabclick2").css("pointer-events", "auto");
    $("#tabclick3").css("pointer-events", "auto");

    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"none"});

    $("#tab1name").css({"borderBottom":"1.5px solid red"});
    $("#tab2name").css({"borderBottom":"none"});
    $("#tab3name").css({"borderBottom":"none"});
  });

  $("#tabclick2").click(function() {
    $("#tabdisp2").toggle("fast")
    $("#tabclick1").css("pointer-events", "auto");
    $("#tabclick2").css("pointer-events", "none");
    $("#tabclick3").css("pointer-events", "auto");

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp3").css({"display":"none"});

    $("#tab1name").css({"borderBottom":"none"});
    $("#tab2name").css({"borderBottom":"1.5px solid red"});
    $("#tab3name").css({"borderBottom":"none"});
  });

  $("#tabclick3").click(function() {
    $("#tabdisp3").toggle("fast")
    $("#tabclick1").css("pointer-events", "auto");
    $("#tabclick2").css("pointer-events", "auto");
    $("#tabclick3").css("pointer-events", "none");

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"none"});

    $("#tab1name").css({"borderBottom":"none"});
    $("#tab2name").css({"borderBottom":"none"});
    $("#tab3name").css({"borderBottom":"1.5px solid red"});
  });
});
