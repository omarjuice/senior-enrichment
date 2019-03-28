'use strict'

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.
require('dotenv').config()
const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(chalk.yellow('Opening database connection'))
const env = process.env.NODE_ENV
let dbname = env === 'test' ? process.env.DB_TEST : process.env.DB
// create the database instance that can be used in other database files
const db = new Sequelize(env === 'production' ? process.env.DATABASE_URL : `postgres://localhost:5432/${dbname || pkg.name}`, {
  logging: false // so we don't see all the SQL queries getting made
})

module.exports = db
