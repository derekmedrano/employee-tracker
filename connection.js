const mysql = require('mysql2');

// here is our config setup
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '!Weep&UWeepAlone19992009',
        database: 'employees_db'
    }
)
// make the connection request
connection.connect(function(err) {
    if(err) {
        throw err;
    }
    console.log("DB connected..");
});

// here we are allowing the OBJECT/method/data to be accessed OUTSIDE of this file
module.exports = connection;