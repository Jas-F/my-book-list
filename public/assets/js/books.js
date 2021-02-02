// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-book").on("click", function(event) {
      var id = $(this).data("id");
      var newBook = $(this).data("newbook");
  
      var newBookState = {
        finished: newBook
      };
  
      // Send the PUT request.
      $.ajax("/api/bookList/" + id, {
        type: "PUT",
        data: newBookState
      }).then(
        function() {
          console.log("changed to new state", newBookState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBook = {
        name: $("#ca").val().trim(),
        finished: $("[name=finished]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/bookList", {
        type: "POST",
        data: newBook
      }).then(
        function() {
          console.log("created new book");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // 
  
    $(".delete-book").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/bookList/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted book", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  