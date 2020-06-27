const { Pool } = require('pg')

require('dotenv').config()

let config = {}
if(process.env.NODE_ENV == 'development')
  config = {
      'user': process.env.DB_USER,
      'password': process.env.DB_PASSWORD,
      'host': process.env.DB_HOST,
      'database': process.env.DB_DATABASE,
      'port': process.env.DB_PORT
  }
else if(process.env.NODE_ENV == 'production')
  config ={
    connectionString: process.env.DB_URI
  }

console.log(config)
const pool = new Pool(config)

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  },
}