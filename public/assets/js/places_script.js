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

      $(".visit").on("click", function(event) {
         var id = $(this).data("id");
         
          // Send the PUT request.
          $.ajax("/api/places/" + id, {
            type: "PUT",
            // assigning data: an object 
            data:  {
               visited: true
            }
          }).then(
            function() {
              console.log("Moved place to Visited!");
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });
});