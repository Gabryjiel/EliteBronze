const { Client } = require('pg')

require('dotenv').config()

let config = {}
if(process.env.NODE_ENV == 'production')
    config = {
      'connectionString': process.env.DATABASE_URL,
      'ssl': {
        rejectUnauthorized: false
      }
  }
else{
  config = {
    'user': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,
    'host': process.env.DB_HOST,
    'database': process.env.DB_DATABASE,
    'port': process.env.DB_PORT
  }
}

const client = new Client(config)
client.connect();

module.exports = {
  query: (text, params) => {
    return client.query(text, params)
  },
}