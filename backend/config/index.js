'use strict'

const pkg = require('../package.json')

const config = {
  db: {
    database: process.env.DB_NAME || "golden",
    username: process.env.DB_USER || "golden",
    password: process.env.DB_PASS || "golden123",
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};

Object.assign(config, { pkg })

module.exports = config
