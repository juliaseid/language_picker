$(document).ready(function() {
  $("#userInfo").submit(function(event) {
    var firstName=$("input#firstName").val();
    var email=$("input#email").val();
    
    if (email) {
      $("#userName").empty().append(firstName);
      $("#quizView").show();
      event.preventDefault();
    }
    else {
      alert("Please enter a valid email address!")
    };
  });

  $("#quizButton").submit(function(event){
    $("#userName").empty().append(firstName);
    $("#results").show();
    
  });

  $("#resultsButton").click(function(event) {
    $("#realResults").show();
    event.preventDefault();
  });

});