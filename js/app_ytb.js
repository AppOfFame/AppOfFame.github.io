$(document).ready(function() {
  // Click video
  $('body').on('click','.thumbnail',function(){
    $("#tabdisp2-1").css({"display":"none"});
    $("#tabdisp2-2").css({"display":"block"});
    $("#tabdisp2-2").append('<iframe src="../html/raceChart.html" style="border:none; width:850px; height:500px"></iframe>');
  });
});
