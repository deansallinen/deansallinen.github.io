$(function(){
  $( "#headerimg" ).hover(function() {
    $( this ).animate({top: "2em"});
  },
  function() {
    $( this ).animate({top: "3em"});
  });
});
