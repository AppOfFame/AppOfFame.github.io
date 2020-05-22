$(document).ready(function() {
  var count = 0

  d3.csv("../data/dev_apps.csv").then(function(data) {
    data.forEach(function(d) {
      if (count%5 == 0 && count != 60){
        $("#appendgrades").append(
          '<div class="row col-11 semester">' +
            '<span class="extraBold">Developer rank: ' + (count+1) + '-' + (count+5) + '</span>' +
          '</div>');
      }
      else if (count%5 == 0 && count == 60){
        $("#appendgrades").append(
          '<div class="row col-11 semester">' +
            '<span class="extraBold">Developer rank: ' + (count+1) + '-' + (count+2) + '</span>' +
          '</div>');
      }

      $("#appendgrades").append(
        '<p class="row col-11 divided">' +
          '<span>' + d.developer + '</span>' +
          '<span class="divider"></span>' +
          '<span class="grade bold">' + d.Developer_rank + '</span>' +
        '</p>'
      );
      count += 1;
    });
  });


  // Tabs
  $("#tab1").css({"color":"red"});
  // Directory click
  $('body').on('click','#tab1',function(){
    $(window).scrollTop(0);

    $("#tab1").css({"color":"red"});
    $("#tab2").css({"color":"black"});
    $("#tab3").css({"color":"black"});

    $("#tabdisp1").css({"display":"block"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"none"});
  });
  // Apps click
  $('body').on('click','#tab2',function(){
    $(window).scrollTop(0);

    $("#tab1").css({"color":"black"});
    $("#tab2").css({"color":"red"});
    $("#tab3").css({"color":"black"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"block"});
    $("#tabdisp3").css({"display":"none"});
  });
  // Moodle click
  $('body').on('click','#tab3',function(){
    $(window).scrollTop(0);

    $("#tab1").css({"color":"black"});
    $("#tab2").css({"color":"black"});
    $("#tab3").css({"color":"red"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"block"});
  });


  // To click links
  $('body').on('click','#togrades',function(){
    $(window).scrollTop(0);

    $("#tab1").css({"color":"black"});
    $("#tab2").css({"color":"red"});
    $("#tab3").css({"color":"black"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"block"});
    $("#tabdisp3").css({"display":"none"});
  });

});
