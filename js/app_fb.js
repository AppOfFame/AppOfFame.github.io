$(document).ready(function() {
  // Reacts hover
  // Hover like
  $(".action-like")
  .mouseover(function() {
    $(this).css({"color":"#2e487c"});
  })
  .mouseout(function() {
    $(this).css({"color":"#657786"});
    if ($('#like1').hasClass('clicked')) {
      $(this).css({"color":"#2e487c"});
    }
  });

  // Hover comment
  $(".action-comment")
  .mouseover(function() {
    $(this).css({"color":"#2e487c"});
  })
  .mouseout(function() {
    $(this).css({"color":"#657786"});
    if ($('#com1').hasClass('clicked')) {
      $(this).css({"color":"#2e487c"});
    }
  });


  // Reacts click
  // Click like
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
      $(this).css({"color":"#2e487c"});
      $("#rlike1").attr("class", 'fas fa-thumbs-up');
      $("#rlike1").addClass('animated heartBeat').one('animationend', function(){
        $(this).removeClass('animated heartBeat');
      });
      $("#nlike1").text("853");
    }
  });
});
