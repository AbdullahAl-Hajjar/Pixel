const express = require('express')
const port = 3000
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createPool({
    host     : '35.203.73.123:3306',
    user     : 'admin',
    password : 'password',
    database : 'sparkpathdb'
  });


  const app = express()

  app.get('/clients', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM clients', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))



