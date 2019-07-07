const seq = require('sequelize');
const database = require('../index');

const credential = database.define(
  "credential",
  {
    id:{
      type:seq.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    username:{
      type:seq.STRING,
      unique:true,
      null:false,
      require:true,
      validate:{
        isAlphanumeric:true,
        notNull:true,
        len: [8,16],
      }
    },
    email:{
      type:seq.STRING,
      unique:true,
      null:false,
      require:true,
      validate:{
        isEmail:true,
        notNull:true,
      }
    },
    password:{
      type:seq.STRING,
      null:false,
      require:true,
      validate:{
        notNull:true,
        len: [8, 18],
      }
    },
    first_name:{
      type:seq.STRING,
      null:false,
      require:true,
      validate:{
        notNull:true,
        isAlpha:true,
      }
    },
    last_name:{
      type:seq.STRING,
      null:false,
      require:true,
      validate:{
        notNull:true,
        isAlpha:true,
      }
    }
  },{
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  database.sync()
    .then(() => {
      console.log("Credential table is synced")
    })
    .catch((error) => {
      console.log("caught error with Credential: " + error)
    })
)
