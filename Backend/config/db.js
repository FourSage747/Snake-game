const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "snakegame",
  password: "rutor26762676",
  port: 5432,
});

module.exports = pool;
