var express = require('express')
    bodyParser = require('body-parser')
    app = express()
    massive= require("massive")
    config = require('./config.js')
    port= config.port
    cors = require('cors')

    var app =  module.exports = express();

    app.use(bodyParser.json());
    app.use(cors())

    