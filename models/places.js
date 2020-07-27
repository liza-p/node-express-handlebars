

var orm = require("../config/orm.js");

const places = {
 //get data for all places 
    getAll: function(cb) {
        orm.getAll("places", function(res) {
            cb(res);
          });
    },
   
    // add a place
    add: function(placeName, cb){
        orm.add("places", ["title"], [placeName], cb)
    },
    // visited -- set the place as a true when visited
    update: function(objColVals,condition,cb){
        orm.update("places", objColVals, condition, cb)
    }
}

module.exports = places;




