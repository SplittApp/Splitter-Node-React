const seq = require('sequelize');
const { postgres } = require('../../index');

const user = postgres.define(
  "user",
  {
    id: {
      type: seq.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: seq.STRING,
      unique: true,
      null: false,
      require: true,
      validate: {
        isAlphanumeric: true,
        allowNull: false,
        len:  [8,16],
      }
    },
    email: {
      type: seq.STRING,
      unique: true,
      null: false,
      require: true,
      validate: {
        isEmail: true,
        allowNull: false,
      }
    },
    password: {
      type: seq.STRING,
      null: false,
      require: true,
      validate: {
        allowNull: false,
        len:  [8, 18],
      }
    },
    first_name: {
      type: seq.STRING,
      null: false,
      require: true,
      validate: {
        allowNull: false,
        isAlpha: true,
      }
    },
    last_name: {
      type: seq.STRING,
      null: false,
      require: true,
      validate: {
        allowNull: false,
        isAlpha: true,
      }
    }
  },{
    createdAt:  seq.DATE,
    updatedAt:  seq.DATE,
  },
);
postgres.sync()
  .then(() => {
    console.log("friend table is synced")
  })
  .catch((error) => {
    console.log("caught error with friend:  " + error)
  })

module.exports.user = user;
