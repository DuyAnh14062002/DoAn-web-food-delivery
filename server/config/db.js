const sql = require("mssql/msnodesqlv8");

const config = {
  user: "sa",
  password: "kaka0000",
  server: "localhost\\SQLEXPRESS",
  database: "QLBanHang",
  driver: "msnodesqlv8",
  options: {
    enableArithAbort: true,
    encrypt: false,
  },
};

const db = new sql.ConnectionPool(config).connect().then((pool) => {
  return pool;
});

module.exports = { db };
