$(document).ready(function () {

    $("#submit").on("click", function(event) {
    event.preventDefault();

    // Make a newBurger object
    var newBurger = {
      burger_name: $("#burgerInput").val().trim(),
    };

    console.log(newBurger);

$.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function(data) {
      console.log("new burger added");
      // Reload the page to get the updated list
      location.reload();

      var insert = "<div>" + data.burger_name + "</div>"
      $("#burgerToEat").append(insert)
    }
  );
});

    $(document).on("click", ".change-eat", function (event) {
        event.preventDefault()

        var updateID = $(this).data('id');
        var updatePath = "/api/burger/" + updateID;
        var updatedBurger = {
            id: updateID,
            devoured: true
        };

        $.ajax(updatePath, {
            type: "PUT",
            data: updatedBurger
        }).then(function () {
            console.log("Burger at: " + updateID + "updated!");
            location.reload()

        })
    });


});
