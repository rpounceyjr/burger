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
    //now need to res.render this list to the template
})

module.exports = router;