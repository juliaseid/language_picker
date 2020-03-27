$((document).ready(function() {
  ($("#userInfo").submit(function(event) {
    var firstName=$("input#firstName").val();
    $(".firstName").empty().append(firstName);
    $("#quizView").show();
    event.preventDefault();
  });

  ($("#quiz").submit(function(event) {
    $(".firstName").empty().append(firstName);
    $("#results#resultsTeaser").show();
    event.preventDefault();
  });

  ($("#resultsButton").click(function(event) {
    $("#realResults").show();
    event.preventDefault();
  });

});