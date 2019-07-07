const seq = require('sequelize');
const database = require('../index');
const { credential } = require('../Credentials');
const { picture, backgroundImage } = require('../ProfileAttachments');

const profile = database.define(
  "profile",
  {
    id:{
      type:seq.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    bio:{
      type:seq.STRING,
      null:true
    },
    facebook:{
      type:seq.STRING,
      null:true,
      validate:{
        isUrl: true,
      }
    },
    twitter:{
      type:seq.STRING,
      null:true,
      validate:{
        isUrl: true,
      }
    },
    website:{
      type:seq.STRING,
      null:true,
      validate:{
        isUrl: true,
      }
    },
  },{
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  database.sync()
    .then(() => {
      console.log("Profile table is synced")
    })
    .catch((error) => {
      console.log("caught error with Profile: " + error)
    })
);

picture.addTo(profile);
backgroundImage.addTo(profile);

credential.hasOne(profile);
profile.hasOne(credential);
