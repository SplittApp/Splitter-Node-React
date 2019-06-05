const app = require('./www/bin/app.js');
require('dotenv').config()

const port = 1122

app.listen(port, () => {
  console.log(`the server is running properly at port: ${port}`);
})
