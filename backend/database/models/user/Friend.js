const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('./User');

const friend = postgres.define(
  "friend",
  {
    id: {
      type: seq.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    blocked: {
      type: seq.BOOLEAN,
      default: false,
      null: false
    },
    favorite: {
      type: seq.BOOLEAN,
      default: false,
      null: false
    },
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

friend.belongsTo(user, {as: 'requested'});
friend.belongsTo(user, {as: 'accepted'});

module.exports.friend = friend;
