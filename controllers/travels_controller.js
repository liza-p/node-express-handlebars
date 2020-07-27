
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

router.post("/api/places",(req,res)=>{
  console.log(req.body);
  
  places.add(req.body.placeName, function(result){
    res.json({ id: result.insertId });
  })
});
  
module.exports = router;