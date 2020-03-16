const mysql = require('mysql2');

// connect to a database peoplebook running on your localmachine
const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'dKgl5Ssh7t',
    database: 'dKgl5Ssh7t',
    password: ' XjoxZkghpO',
    port: 3306
});

module.exports = pool.promise();
