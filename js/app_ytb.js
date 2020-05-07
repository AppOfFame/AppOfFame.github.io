$(document).ready(function() {

  // Upvote
  $('body').on('click','.up',function(){
    $(".up").css({"color":"blue"})
    $(".down").css({"color":"gray"})

    $(".up").addClass('animated jello').one('animationend', function(){
      $(this).removeClass('animated jello');
    })
  ;})

  // Downvote
  $('body').on('click','.down',function(){
    $(".up").css({"color":"gray"})
    $(".down").css({"color":"red"})

    $(".down").addClass('animated jello').one('animationend', function(){
      $(this).removeClass('animated jello');
    })
  ;})
});
