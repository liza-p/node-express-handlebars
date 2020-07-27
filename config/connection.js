const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "mkorvuw3sl6cu9ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ecau5iqgmez11wwu",
  password: "mkd631m1ypj4gpbx",
  database: "lfj036r18a7yv0sn"
});
// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "travel_bucket_list_db"
//   });
  

connection.connect(err => {
  if (err) {
    console.error("Database connection error: " + err.stack);
    return;
  }
  console.log("Database connected with id " + connection.threadId);
});

module.exports = connection;