const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({
  host: '127.0.0.1',
  port: 3307,
  user: 'root',
  password: 'root',
  database: 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;