const seq = require('sequelize');
const postgres = require('pg');

const db = new seq(
  'splitter',
  'masteradmin',
  'masterAdmin',
  {
    host:'localhost',
    dialect:'postgres'
  }
)

db.authenticate()
  .then(() => {
    console.log(`The database Splitter has been connected`)
  }).catch((err) => {
    throw err;
  })
