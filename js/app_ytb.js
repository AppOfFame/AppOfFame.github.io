$(document).ready(function() {
  // Click video
  $('body').on('click','.thumbnail',function(){
    $("#tabdisp2-1").css({"display":"none"});
    $("#tabdisp2-2").css({"display":"block"});
    $("#appendvideo").append('<iframe id="videoplayed" src="../html/raceChart.html" style="border:none; width:850px; height:500px"></iframe>');
    $("#tabdisp2-2").addClass('animated slideInUp').one('animationend', function(){
      $(this).removeClass('animated slideInUp');
    });
  });

  // Click subscibe
  $('body').on('click','.sub',function(){
    if(!$(this).hasClass('clicked')){
      $(this).css({"color":"#657786"});
      $(this).addClass('animated rubberBand').one('animationend', function(){
        $(this).removeClass('animated rubberBand');
      });
      $(this).find("span").text("SUBSCRIBED");
      $(this).addClass('clicked');
    }
    else{
      $(this).css({"color":"red"});
      $(this).find("span").text("SUBSCRIBE");
      $(this).removeClass('clicked');
    }
  });


  // Tabs
  $(".tab-trend").css({"color":"red"});
  $("#trend").css({"color":"red"});
  // Home click
  $('body').on('click','.tab-trend',function(){
    $(".tab-trend").css({"color":"red"});
    $("#trend").css({"color":"red"});
    $(".tab-subs").css({"color":"#657786"});
    $("#subs").css({"color":"#657786"});
    $(".tab-lib").css({"color":"#657786"});
    $("#lib").css({"color":"#657786"});

    $("#tabdisp1").css({"display":"block"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"none"});
  });
  // Search click
  $('body').on('click','.tab-subs',function(){
    $(".tab-trend").css({"color":"#657786"});
    $("#trend").css({"color":"#657786"});
    $(".tab-subs").css({"color":"red"});
    $("#subs").css({"color":"red"});
    $(".tab-lib").css({"color":"#657786"});
    $("#lib").css({"color":"#657786"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"block"});
    $("#tabdisp2-1").css({"display":"block"});
    $("#tabdisp2-2").css({"display":"none"});
    $("#videoplayed").remove();
    $("#tabdisp3").css({"display":"none"});
  });
  // Bell click
  $('body').on('click','.tab-lib',function(){
    $(".tab-trend").css({"color":"#657786"});
    $("#trend").css({"color":"#657786"});
    $(".tab-subs").css({"color":"#657786"});
    $("#subs").css({"color":"#657786"});
    $(".tab-lib").css({"color":"red"});
    $("#lib").css({"color":"red"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"block"});
  });
});
