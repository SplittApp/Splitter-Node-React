const seq = require('sequelize');
const database = require('../index');

const Friend = database.define(
  "friend",
  {
    id:{
      type:seq.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    blocked:{
      type:seq.BOOLEAN,
      default:false,
      null:false
    }
    favorite:{
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

Friend.hasOne(User)
User.hasMany(Friendsss)
