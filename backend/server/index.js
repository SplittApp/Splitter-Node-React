const app = require('./www/bin/app.js');
const database = require('../database/index');
const { user } = require('../database/models/user/User');
const { profile } = require('../database/models/user/Profile');
const { detail } = require('../database/models/user/Detail');
const { friend } = require('../database/models/user/Friend');
require('dotenv').config()

const port = 1122

app.listen(port, () => {
  console.log(`the server is running properly at port: ${port}`);
})
