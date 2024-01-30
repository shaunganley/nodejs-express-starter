// database setup
var mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME
});
  
pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
   
    console.log('Connected to database');

    connection.release();
});

module.exports = pool;