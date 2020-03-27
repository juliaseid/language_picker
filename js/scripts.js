$(document).ready(function() {
  $("#userInfo").submit(function(event) {
    var firstName=$("input#firstName").val();
    var email=$("input#email").val();
    
    if (email) {
      $(".firstName").empty().append(firstName);
      $("#quizView").show();
      event.preventDefault();
    }
    else {
      alert("Please enter a valid email address!")
    };
  });

  $("#quiz").submit(function(event) {
    $(".firstName").empty().append(firstName);
    $("#results#resultsTeaser").show();
    event.preventDefault();
  });

  $("#resultsButton").click(function(event) {
    $("#realResults").show();
    event.preventDefault();
  });

});