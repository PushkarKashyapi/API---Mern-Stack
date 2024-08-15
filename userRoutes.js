const express = require('express')
const usercontroller = require('./usercontroller')

const userrouter = express.Router()

userrouter.route('/')
.get(usercontroller.allusers)

module.exports = userrouter