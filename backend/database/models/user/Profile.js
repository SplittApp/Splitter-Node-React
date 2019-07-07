const seq = require('sequelize');
const { postgres } = require('../../index');
const { user } = require('./user');
// const { picture, backgroundImage } = require('./ProfileAttachments');

const profile = postgres.define(
  "profile",
  {
    id: {
      type: seq.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bio: {
      type: seq.STRING,
      null: true
    },
    facebook: {
      type: seq.STRING,
      null: true,
      validate: {
        isUrl:  true,
      }
    },
    twitter: {
      type: seq.STRING,
      null: true,
      validate: {
        isUrl:  true,
      }
    },
    website: {
      type: seq.STRING,
      null: true,
      validate: {
        isUrl:  true,
      }
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

// picture.addTo(profile);
// backgroundImage.addTo(profile);

user.hasOne(profile)

module.exports.profile = profile
