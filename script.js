$(document).ready(function()
{
    $("#toggle").click(function() {
        $("header").slideToggle("slow");
        
    });
});
$(document).ready(function(){
    $("header li").click(function(){
      $("header").slideUp("slow");
    });
  });