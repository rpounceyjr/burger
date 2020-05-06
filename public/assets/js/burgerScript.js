//===========ajax functions============
//add a new burger
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $("#burger-add").val().trim(),
    };
    console.log("clicked")


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

//======================================