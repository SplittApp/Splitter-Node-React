const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const request = require('request');
const parser = require('body-parser');
const path = require('path');
const helmet = require('helmet');

const server = express()

server.use(morgan("dev"))
server.use(parser.json())
server.use(parser.urlencoded({extended:true}))
// server.use(express.static(path.join(__dirname, "../../frontend/")))

module.exports = server;
