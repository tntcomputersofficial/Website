$(document).ready(function () {
   alert("Yay Java!"); 
   
   $("p").css("font-weight","bold"); 
   $("p").css("font-variant","small-caps");
   
   $("#hide").click(function () {
      $("#Hide").hide("slow"); 
   });

   $("#show").click(function () {
      $("#Hide").show("fast"); 
   });

   $("#toggle").click(function () {
      $("#Toggle").toggle(1500);
   });
   
   $("p").mouseover(function () {
      $("p").css("text-shadow","2px 2px #0F0");
   });

   $("p").mouseout(function () {
      $("p").css("text-shadow","none");
   });
   
   $("#fade").click(function() {
    $("#Fade").fadeToggle(1000);
   });
});