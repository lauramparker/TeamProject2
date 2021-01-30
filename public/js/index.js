// ADDS a new REVIEW to the list  
$(function() { 
    $(".createNewReview").on("submit", function(event) {
    
      // preventDefault on a SUBMIT event
      event.preventDefault();
  
      var newReview = {
        hotel_name: $("#hotel_name").val().trim(),
        review: $("#review_text").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/reviews", {
        type: "POST",
        data: newReview
      }).then(
        function() {
          console.log("created new review");
          // Reload the page to get the updated list
          location.reload();
        });
    });
});



//SEARCH REVIEWS
$(function() { 
    $(".searchBtn").on("click", function(event) {

      var searchTerm = $("#search_term").val().trim(); //does this need to be an object with id?
  
    //   var searchRequest = {
    //     id: id,
    //     search: searchTerm,
    //   };

      // Send the POST request.
      $.ajax("/api/reviews", {
        type: "POST",
        data: searchTerm
      }).then(
        function() {
          console.log("searching reviews");
          // TO-Do - Reload the page to get the results
          location.reload(); 
        });
    });
});
