// ADDS a new CITY REVIEW to the list  
$(function() { 
    $("#create-review").on("submit", function(event) {
      // preventDefault on a SUBMIT event
      event.preventDefault();

      if 
  
      var cityReview = {
        city_name: $("#inputName").val().trim(),
        review: $("#inputReview").val().trim(),
        city_review: $("[name=cityRadio]:checked").val().trim()
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


// ADDS a new HOTEL REVIEW to the list   ///Thinking these should actually be in the same function and then register as city or hotel based on the radio button.
$(function() { 
    $(".createHotelReview").on("submit", function(event) {
    
      // preventDefault on a SUBMIT event
      event.preventDefault();
  
      var hotelReview = {
        hotel_name: $("#inputName").val().trim(),
        review: $("#inputReview").val().trim(),
        hotel_review: $("[name=hotelRadio]:checked").val().trim()
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
