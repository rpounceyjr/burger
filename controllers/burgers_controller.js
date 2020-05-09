const express = require("express");
const burger = require("../models/burger");
const router = express();

//this is the backend to get all burger names and
//render them on the index.handlebars
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgersData = {
            burgers: data
        };

        console.log(burgersData);
        res.render("index", burgersData)
    })
})
//this route adds a burger burger name to the table
router.post("/api/burgers", (req, res) => {
    console.log(req.body.name)
    burger.insertOne(req.body.name, (result) => {
        console.log(result);
        //reloads the page to get the new burger 
        res.redirect("/")
    });
});

//this is the route to change a burger's "devoured" state
router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  //updates the burger's devoured state to true
    burger.updateOne(1, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;