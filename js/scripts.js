$(document).ready(function() {
  
var Q1=$("input:radio[name=apple]:checked").val()
var Q2=$("input:radio[name=product]:checked").val()
var Q3=$("input:radio[name=timeFrame]:checked").val()
var Q4=$("input:radio[name=audience]:checked").val()
var Q5=$("input:radio[name=reptile]:checked").val()

function chooseLang(Q1, Q2, Q3, Q4, Q5) {
  var languageRec=null;
  if (Q1==="mandatory" || (Q1==="prefer" && Q2==="mobile" && (Q3==="variety" || Q4==="design"))) {
    languageRec="Swift"
  }
  else if (Q5==="soGreat" || (Q5==="coolEnough" && (Q2==="IoT" || Q4==="data"))) {
    languageRec="Python"
  }
  else if ((Q3==="mastery" && Q2==="enterprise") || (Q2==="enterprise" && Q4==="moderate") || (Q3==="mastery" && Q4==="moderate")) {
    languageRec="Java"
  }
  else {
    languageRec="JavaScript"    
  }
return languageRec
}
  
  
  
  
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
    var langRec=chooseLang(Q1, Q2, Q3, Q4, Q5);
    var selLangDesc=null;
      if (langRec==="Swift") {
        selLangDesc="If you love Apple devices, and like the idea of developing apps that could potentially be used by millions of consumers, Swift could be a great language to begin your coding journey.  It is a proprietary language for Apple devices, so it is optimized for the kind of consumer-oriented design Apple is known for!"
      }
      else if (langRec==="Python") {
        selLangDesc="Python is most commonly used in two areas: writing the code that controls web-enabled devices (IoT) for consumer and business applications, and managing and processing large data sets, such as in scientific, financial, and machine learning settings.  Its clear syntax makes it easy to begin, but its optimization for handling mathematical operations means it can be used for extremely complex problems."
      }
      else if (langRec==="Java") {
        selLangDesc="Java is a versatile language that is used in a wide range of applications, but is especially popular for large-scale enterprise applications, such as corporate websites and proprietary software for large, complex projects.  It is not as mobile-friendly as Swift or JS, but is much easier to adapt for consumer-facing applications than Python, and has the stability and scale to meet the needs of large, multi-faceted projects."
      }
      else if (langRec==="JavaScript") {
        selLangDesc="JavaScript is a great place to begin if you're not sure where you want to go!  It is mobile-friendly, but not platform-specific, can interact well with databases, and has a very broad and deep code base to support your work in virtually any project you might take on.  It might not be the very best at anything, but it's relatively easy to learn and extremely versatile."
      };
    $("#bestLanguage").empty().append(langRec);
    $("languageDesc").empty().append(selLangDesc);
    $("#realResults").show();
    event.preventDefault();
  });

});