var mysql = require("mysql2");
var pool = mysql.createPool({
  host: "localhost",
  port: 3310,
  user: "cloud",
  password: "1303",
  database: "notekeeper",
  connectionLimit: 300,
});

 
module.exports = pool;
