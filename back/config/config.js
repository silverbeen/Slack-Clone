require("dotenv").config();

module.exports = {
  development: {
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
    dialect: "mysql",
  },
  test: {
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
    dialect: "mysql",
  },
  production: {
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
    dialect: "mysql",
  },
};
