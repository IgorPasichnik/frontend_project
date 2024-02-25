const PG = require("pg");
const Pool = PG.Pool;

const pool = new Pool({
  user: "admin",
  password: "1234",
  database: "dataweather",
  host: "localhost",
  port: "9000",
});

module.exports = {
  pool,
};
