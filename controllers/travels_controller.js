
 var places = require("../models/places.js");
 var express = require("express");
 var router = express.Router();


 // super simple route for testing setup
 // This route matches with localhost:8080/
router.get("/", (req, res) => {
    places.getAll(data => {
      res.render("index", {places: data});
    });
});
  
module.exports = router;