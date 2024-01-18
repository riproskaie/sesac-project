$(document).ready(function(){
    $('article').removeClass("open");
  });
  $('.opener').click(function(){
    $(this).parent().toggleClass("open");
  });