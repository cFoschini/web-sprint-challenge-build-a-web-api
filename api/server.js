const express = require('express')
const server = express()
const projectsRouter = require('./projects/projects-router')
const actionsRouter = require('./actions/actions-router')
module.exports = server;
