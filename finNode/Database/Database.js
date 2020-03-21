const mysql = require('mysql');
const connect = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password : 'root',
    database : 'bekadia'
})

module.exports = connect;