// ADDS a new CITY REVIEW to the list  
$(function() { 
    $(".createNewCityReview").on("submit", function(event) {
    
      // preventDefault on a SUBMIT event
      event.preventDefault();
  
      var cityReview = {
        city_name: $("#city_name").val().trim(),
        review: $("#review_text").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/reviews", {
        type: "POST",
        data: cityReview
      }).then(
        function() {
          console.log("created new review");
          // Reload the page to get the updated list
          location.reload();
        });
    });
});


// ADDS a new HOTEL REVIEW to the list  
$(function() { 
    $(".createNewHotelReview").on("submit", function(event) {
    
      // preventDefault on a SUBMIT event
      event.preventDefault();
  
      var hotelReview = {
        hotel_name: $("#hotel_name").val().trim(),
        review: $("#review_text").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/reviews", {
        type: "POST",
        data: hotelReview
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
