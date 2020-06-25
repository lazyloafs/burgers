// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "nnmeqdrilkem9ked.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "yg6d6kp9izqk2t5g",
  password: "xhdzn889pznw49l9",
  database: "gz3vzy6spizr4s5i"
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
