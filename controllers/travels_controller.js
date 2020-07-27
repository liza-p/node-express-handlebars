
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
router.put("/api/places/:id",(req,res) =>{
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  places.update({
    visited: req.body.visited
  }, consition,function(result) {
    if(result.changedRows == 0){
      return res.status(404).end();
    }else{
      res.status(200).end();
    }
  });
});
  
module.exports = router;