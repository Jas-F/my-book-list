var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "password",
    database: "bookList_db"
});

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connection(function (err) {
    if (err) {
        console.log(err);
    }
})

module.exports = connection;