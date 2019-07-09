$(document).ready(function(){
  $(".myImageClass").mouseover(function(){
	 $(".hiddenClass").css("visibility", "visible");
  });
  $(".myImageClass").mouseleave(function(){
	 $(".hiddenClass").css("visibility", "hidden");
  });
});
