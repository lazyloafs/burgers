// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "nnmeqdrilkem9ked.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "z4n8wi8ourzfwdss",
  password: "d4ei6a5jjpur61n9",
  database: "lxj2hd3tabm316u7"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
