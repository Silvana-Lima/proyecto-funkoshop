const mysql = require("mysql2");
require("dornev").config();

const pool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
  port: process.env.DBPORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((e, conn) => {
  if (e) {
    console.error("Error al conectarse a la DB: " + e);
  } else {
    console.log("Conexión exitosa");
    conn.release();
  }
});

module.export = {
  conn: pool.promise(),
};
