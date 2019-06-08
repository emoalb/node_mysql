const mysql = require('mysql');
//
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'eemmoo123'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "soft_uni",
    port:3306
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM employees", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
