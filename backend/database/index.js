const seq = require('sequelize');
const postgres = require('pg');

const connectionPostgres = new seq(
  'splitter',
  'splitter',
  'masterpass',
  {
    host:'localhost',
    dialect:'postgres'
  }
);

connectionPostgres.authenticate()
  .then(() => {
    console.log(`The database Splitter has been connected`)
  }).catch((err) => {
    throw err;
  });

module.exports.postgres = connectionPostgres;
