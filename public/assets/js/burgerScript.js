//add a new burger
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#burger-add").val().trim(),
    };
    console.log("clicked")
    console.log(newBurger);


    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("Added burger!");
        // Reload the page to get the updated list
        location.reload();
    })
})

//update a burger 
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    const id = $(this).data("id");
    const devouredUpdate = $(this).data("devoured");
    console.log($(this).data("devoured"));

    const devouredState = {
      devoured: devouredUpdate
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("changed devoured to", devouredUpdate);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})