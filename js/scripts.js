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

  $("#quiz").submit(function(event){
    var firstName=$("input#firstName").val(); 
    $("#userName2").empty().append(firstName);
    $("#results").show();
    $("#resultsTeaser").show();
    event.preventDefault();
    
  });

  $("#resultsButton").click(function(event) {
    $("#realResults").show();
    event.preventDefault();
  });

});