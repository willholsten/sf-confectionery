


$(function(){
  $(".hamburger").click(function(){
    $(".navigation").toggleClass('navigation-flex');
    $(".burger").toggle();
    $(".close").toggle();
    $("body").css("overflow","hidden");
    
  });
});
