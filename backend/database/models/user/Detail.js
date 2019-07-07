const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('./User');

const stateCodes = [[
 'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
 'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
 'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
 'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
 'VT','VI','VA','WA','WV','WI','WY'
]]

const detail = postgres.define(
  "detail",
  {
    id: {
      type: seq.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    gender: {
      type: seq.STRING,
      required: true,
      validate: {
        isIn:  [['M', 'F', 'O']]
      }
    },
    phone: {
      type: seq.INTEGER,
      required: true,
      unique: true,
      validate: {
        isNumeric: true,
        allowNull: false,
        len: [10,12]
      }
    },
    street: {
      type: seq.STRING,
      required: true,
      validate: {
        allowNull: false,
        isAlphanumeric: true,
      }
    },
    city: {
      type: seq.STRING,
      required: true,
      validate: {
        allowNull: false,
        isAlpha: true
      }
    },
    state: {
      type: seq.STRING,
      required: true,
      validate: {
        isIn: stateCodes,
        allowNull: false,
        isAlpha: true
      }
    },
    country: {
      type: seq.STRING,
      required: true,
      validate: {
        isIn: [['United States']],
        allowNull: false,
        isAlpha: true
      }
    },
    zip: {
      type: seq.INTEGER,
      required: true,
      validate: {
        isNumeric: true,
        allowNull: false,
        len: [5,9]
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

user.hasOne(detail)

module.exports.detail = detail
