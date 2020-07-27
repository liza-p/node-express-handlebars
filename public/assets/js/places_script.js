// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#add").on("click", function(event) {
     var placeName = $("#input").val().trim();
     
      // Send the PUT request.
      $.ajax("/api/places", {
        type: "POST",
        // assigning data: an object 
        data:  {
            placeName: placeName
        }
      }).then(
        function() {
          console.log("Added new destination to the Wanna GO!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});