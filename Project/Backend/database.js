const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'ui_Designing' 
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server:', err.stack);
        return;
    }
    console.log('Connected to MySQL server');
});



/*

// Close the connection
connection.end((err) => {
    if (err) {
        console.error('Error closing MySQL connection:', err.stack);
        return;
    }
    console.log('MySQL connection closed');
});
*/

module.exports = connection;