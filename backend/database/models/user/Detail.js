const seq = require('sequelize');
const database = require('../index');

const stateCodes = [[
 'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
 'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
 'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
 'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
 'VT','VI','VA','WA','WV','WI','WY'
]]

const detail = database.define(
  "detail",
  {
    id:{
      type:seq.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    gender:{
      type:seq.STRING,
      required:true,
      validate:{
        isIn: [['M', 'F', 'O']]
      }
    },
    phone:{
      type:seq.INTEGER,
      required:true,
      unique:trues
      validate:{
        isNumeric:true,
        notNull:true,
        len:[10,12]
      }
    },
    street:{
      type:seq.STRING,
      required:true,
      validate:{
        notEmpty:true,
        isAlphanumeric:true,
      }
    },
    city:{
      type:seq.STRING,
      required:true,
      validate:{
        notEmpty:true,
        isAlpha:true
      }
    },
    state:{
      type:seq.STRING,
      required:true,
      validate:{
        isIn:stateCodes,
        notEmpty:true,
        isAlpha:true
      }
    },
    country:{
      type:seq.STRING,
      required:true,
      validate:{
        isIn:[['United States']]
        notEmpty:true,
        isAlpha:true
      }
    },
    zip:{
      type:seq.INTEGER,
      required:true,
      validate:{
        isNumeric:true,
        notEmpty:true,
        len[5,9]
      }
    }
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


  // user = models.ForeignKey(User, on_delete=models.CASCADE)
  // gender = models.CharField(max_length=2, choices=GENDER_CHOICES, default=NONE)
  // phone = PhoneField(blank=True, help_text='Phone Number')
  // street = models.CharField(max_length=150)
  // city = models.CharField(max_length=50)
  // state = USStateField()
  // country = models.CharField(max_length=25,default='USA')
  // zip_code = USZipCodeField()
  // created = models.DateTimeField(auto_now_add=True)
