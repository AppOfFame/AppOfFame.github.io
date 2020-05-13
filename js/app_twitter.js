$(document).ready(function() {
  // Reacts hover
  // Hover comment
  $(".react-com")
  .mouseover(function() {
    $(this).css({"color":"#1DA1F2"});
  })
  .mouseout(function() {
    $(this).css({"color":"#657786"});
    if (!$('#ret1').hasClass('clicked')) {
      $(this).css({"color":"#657786"});
    }
  });

  // Hover retweet
  $(".react-ret")
  .mouseover(function() {
    $(this).css({"color":"mediumseagreen"});
  })
  .mouseout(function() {
    if (!$('#ret1').hasClass('clicked')) {
      $(this).css({"color":"#657786"});
    }
  });

  // Hover like
  $(".react-like")
  .mouseover(function() {
    $(this).css({"color":"crimson"});
  })
  .mouseout(function() {
    if (!$('#like1').hasClass('clicked')) {
      $(this).css({"color":"#657786"});
    }
  });


  // Reacts click
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
    $(".tab-search").css({"color":"#657786"});
    $("#search").css({"color":"#657786"});
    $(".tab-msg").css({"color":"#657786"});
    $("#msg").css({"color":"#657786"});

    $("#tabdisp1").css({"display":"block"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"none"});
    $("#tabdisp4").css({"display":"none"});
  });
  // Search click
  $('body').on('click','.tab-search',function(){
    $(window).scrollTop(0);

    $(".tab-home").css({"color":"#657786"});
    $("#home").css({"color":"#657786"});
    $(".tab-bell").css({"color":"#657786"});
    $("#bell").css({"color":"#657786"});
    $(".tab-search").css({"color":"#1DA1F2"});
    $("#search").css({"color":"#1DA1F2"});
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
    $(".tab-search").css({"color":"#657786"});
    $("#search").css({"color":"#657786"});
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
    $(".tab-search").css({"color":"#657786"});
    $("#search").css({"color":"#657786"});
    $(".tab-msg").css({"color":"#1DA1F2"});
    $("#msg").css({"color":"#1DA1F2"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"none"});
    $("#tabdisp4").css({"display":"block"});
  });
});
