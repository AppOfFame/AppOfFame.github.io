$(document).ready(function() {
  // Click post like
  $('body').on('click','#rlike1',function(){
    if(!$(this).hasClass('clicked')){
      $(this).css({"color":"blue"});
      $("#nlike1").css({"color":"blue"});
      $(this).addClass('animated rubberBand').one('animationend', function(){
        $(this).removeClass('animated rubberBand');
      });
      $(this).addClass('clicked');
      if($("#rdislike1").hasClass('clicked')){
        $("#rdislike1").css({"color":"#657786"});
        $("#rdislike1").removeClass('clicked');
      }
    }
    else{
      $(this).css({"color":"#657786"});
      $(this).removeClass('clicked');
    }
  });

  // Click post dislike
  $('body').on('click','#rdislike1',function(){
    if(!$(this).hasClass('clicked')){
      $(this).css({"color":"red"});
      $("#nlike1").css({"color":"#657786"});
      $(this).addClass('animated rubberBand').one('animationend', function(){
        $(this).removeClass('animated rubberBand');
      });
      $(this).addClass('clicked');
      if($("#rlike1").hasClass('clicked')){
        $("#rlike1").css({"color":"#657786"});
        $("#rlike1").removeClass('clicked');
      }
    }
    else{
      $(this).css({"color":"#657786"});
      $(this).removeClass('clicked');
    }
  });

  // Click video
  $('body').on('click','.thumbnail',function(){
    $(window).scrollTop(0);
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

  // Click video like
  $('body').on('click','#likevid',function(){
    if(!$(this).hasClass('clicked')){
      $(this).css({"color":"blue"});
      $(this).find("i").addClass('animated rubberBand').one('animationend', function(){
        $(this).removeClass('animated rubberBand');
      });
      $(this).addClass('clicked');
      if($("#dislikevid").hasClass('clicked')){
        $("#dislikevid").css({"color":"#657786"});
        $("#dislikevid").removeClass('clicked');
      }
    }
    else{
      $(this).css({"color":"#657786"});
      $(this).removeClass('clicked');
    }
  });

  // Click video dislike
  $('body').on('click','#dislikevid',function(){
    if(!$(this).hasClass('clicked')){
      $(this).css({"color":"red"});
      $(this).find("i").addClass('animated rubberBand').one('animationend', function(){
        $(this).removeClass('animated rubberBand');
      });
      $(this).addClass('clicked');
      if($("#likevid").hasClass('clicked')){
        $("#likevid").css({"color":"#657786"});
        $("#likevid").removeClass('clicked');
      }
    }
    else{
      $(this).css({"color":"#657786"});
      $(this).removeClass('clicked');
    }
  });

  // Click video replay
  $('body').on('click','#replayvid',function(){
    $(this).find("i").addClass('animated swing').one('animationend', function(){
      $(this).removeClass('animated swing');
    });
    $(window).scrollTop(70);
    $("#videoplayed").remove();
    $("#appendvideo").append('<iframe id="videoplayed" src="../html/raceChart.html" style="border:none; width:850px; height:500px"></iframe>');
  });

  // Click video share
  $('body').on('click','#sharevid',function(){
    if(!$(this).hasClass('clicked')){
      $(this).find("i").addClass('animated tada').one('animationend', function(){
        $(this).removeClass('animated tada');
        $(this).removeClass('fa-share').addClass('fa-check');
        $(this).css({"color":"green"});
        $(this).next("div").text("Shared");
        $(this).next("div").css({"cursor":"default"});
      });
    }
    $(this).addClass('clicked');
  });

  // Tabs
  $(".tab-trend").css({"color":"red"});
  $("#trend").css({"color":"red"});
  // Home click
  $('body').on('click','.tab-trend',function(){
    $(window).scrollTop(0);

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
    $(window).scrollTop(0);

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

    $(".subscriptions .avatar").addClass('animated rubberBand').one('animationend', function(){
      $(this).removeClass('animated rubberBand');
    });
  });
  // Bell click
  $('body').on('click','.tab-lib',function(){
    $(window).scrollTop(0);

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
