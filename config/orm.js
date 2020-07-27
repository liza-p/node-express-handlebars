const connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
const orm = {
  getAll: function(tableName, cb) {
    // gets all data in the table identified by tableName and calls cb on the result
    connection.query("SELECT * FROM ??", tableName, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  add: function(table, cols, vals, cb) {
    var queryString = `INSERT INTO ${table} (${cols.toString()})
    VALUES (${printQuestionMarks(vals.length)})`;

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;