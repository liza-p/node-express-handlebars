

var orm = require("../config/orm.js");

const places = {

    getAll: function(cb) {
        orm.getAll("places", function(res) {
            cb(res);
          });
    }
    //get data for all places 
    // add a place
    // visited -- set the place as a true when visited

}

module.exports = places;