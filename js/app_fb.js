$(document).ready(function() {
  // Reacts hover
  // Hover comment
  $(".action-comment")
  .mouseover(function() {
    $(this).css({"color":"#4267B2"});
  })
  .mouseout(function() {
    $(this).css({"color":"#657786"});
  });

  // Hover like 1
  $(".action-like")
  .mouseover(function() {
    $(this).css({"color":"#4267B2"});
  })
  .mouseout(function() {
    $(this).css({"color":"#657786"});
    if ($('#like1').hasClass('clicked')) {
      $(this).css({"color":"#4267B2"});
    }
    if ($('#like2').hasClass('clicked')) {
      $(this).css({"color":"#4267B2"});
    }
  });



  // Hover comment
  $(".action-comment")
  .mouseover(function() {
    $(this).css({"color":"#4267B2"});
  })
  .mouseout(function() {
    $(this).css({"color":"#657786"});
    if ($('#com1').hasClass('clicked')) {
      $(this).css({"color":"#4267B2"});
    }
  });

  // Reacts click
  // Click like 1
  $('body').on('click','#like1',function(){
    if ($('#like1').hasClass('clicked')) {
      // Remove like
      $(this).removeClass('clicked');
      $(this).css({"color":"#657786"});
      $("#rlike1").attr("class", 'far fa-thumbs-up');
      $("#nlike1").text("852");
    }
    else{
      // Like
      $(this).addClass('clicked');
      $(this).css({"color":"#4267B2s"});
      $("#rlike1").attr("class", 'fas fa-thumbs-up');
      $("#rlike1").addClass('animated heartBeat').one('animationend', function(){
        $(this).removeClass('animated heartBeat');
      });
      $("#nlike1").text("You and 852 others");
    }
  });

  // Click like 2
  $('body').on('click','#like2',function(){
    if ($('#like2').hasClass('clicked')) {
      // Remove like
      $(this).removeClass('clicked');
      $(this).css({"color":"#657786"});
      $("#rlike2").attr("class", 'far fa-thumbs-up');
      $("#nlike2").text("323");
    }
    else{
      // Like
      $(this).addClass('clicked');
      $(this).css({"color":"#4267B2s"});
      $("#rlike2").attr("class", 'fas fa-thumbs-up');
      $("#rlike2").addClass('animated heartBeat').one('animationend', function(){
        $(this).removeClass('animated heartBeat');
      });
      $("#nlike2").text("You and 323 others");
    }
  });

  // Tabs
  $(".tab-home").css({"color":"#4267B2"});
  $("#home").css({"color":"#4267B2"});
  // Home click
  $('body').on('click','.tab-home',function(){
    $(".tab-home").css({"color":"#4267B2"});
    $("#home").css({"color":"#4267B2"});
    $(".tab-bell").css({"color":"#657786"});
    $("#bell").css({"color":"#657786"});
    $(".tab-groups").css({"color":"#657786"});
    $("#grp").css({"color":"#657786"});

    $("#tabdisp1").css({"display":"block"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"none"});
  });
  // Search click
  $('body').on('click','.tab-groups',function(){
    $(".tab-home").css({"color":"#657786"});
    $("#home").css({"color":"#657786"});
    $(".tab-bell").css({"color":"#657786"});
    $("#bell").css({"color":"#657786"});
    $(".tab-groups").css({"color":"#4267B2"});
    $("#grp").css({"color":"#4267B2"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"block"});
    $("#tabdisp3").css({"display":"none"});
  });
  // Bell click
  $('body').on('click','.tab-bell',function(){
    $(".tab-home").css({"color":"#657786"});
    $("#home").css({"color":"#657786"});
    $(".tab-bell").css({"color":"#4267B2"});
    $("#bell").css({"color":"#4267B2"});
    $(".tab-groups").css({"color":"#657786"});
    $("#grp").css({"color":"#657786"});

    $("#tabdisp1").css({"display":"none"});
    $("#tabdisp2").css({"display":"none"});
    $("#tabdisp3").css({"display":"block"});
  });
});
