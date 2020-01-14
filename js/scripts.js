function gnomer(){
  for (var i=0; i<200000; i++) {
  $(".btn-danger").after('<img class="removable" src="walrus.jpg">');
  }
  alert("GNOME ATTACK");
}

$(document).ready(function() {
  $("#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function(){
    $("body").removeClass();
    $(".removable").remove();
    $("body").addClass("red-background");
  });

  $("button#default").click(function(){
    $("body").removeClass();
  });

  $("#salad").click(function(){
    $("body").removeClass();
    $(".removable").remove();
    $("#salad").after('<p class="removable" >Don\'t click me, silly!</p>');
    $("#salad").after('<img class="removable" src="walrus.jpg">');
  });
});