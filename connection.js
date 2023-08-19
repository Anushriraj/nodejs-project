const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'nodejs',
    port: 3306
});

// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Connected!");
//         con.query("CREATE DATABASE mydb", function (err, result) {
//           if (err) {
//             console.log("Not Connected!");
//         } else {
//             console.log("Database created");
//         }
//         });
//     } 
//   });



  module.exports = connection;