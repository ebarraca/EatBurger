// Make sure we wait to attach our handlers until the DOM is fully loaded.

// <!-- //create an ajax that is a put and change devoured from 0 to 1 -->

$(document).ready(function() {
  $(".change-eat").on("click", function() {
      // var burgerId = $(this).data("data-id");
      // console.log(burgerId);
      //
      // $.ajax({
      //     url: 'api/burger' +burgerId,
      //     type: 'PUT',
      //     success: function(data){
      //         console.log("burger eaten")
      //     }
      // });


    var burgerId = $(this).data("data-id");
    var newEat = $(this).data("data-neweat");

    var newEatState = {
      devoured:false
    };


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed sleep to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $(".submit").val().trim(),
      devoured: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");
  //
  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
