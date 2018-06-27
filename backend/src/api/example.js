const express = require('express')
const restify = require('express-restify-mongoose')
const router = express.Router()
restify.serve(
    router,
    require('./db/example'), {
        name: "example",
        prefix: '',
        version: '/v1',
        totalCountHeader: true
    })
/**
 * GET http://<ip>/api/v1/example/count
 * GET http://<ip>/api/v1/example
 * POST http://<ip>/api/v1/example
 * DELETE http://<ip>/api/v1/example
 * 
 * GET http://<ip>/api/v1/example/:id
 * GET http://<ip>/api/v1/example/:id/shallow
 * PUT http://<ip>/api/v1/example/:id
 * POST http://<ip>/api/v1/example/:id
 * PATCH http://<ip>/api/v1/example/:id
 * DELETE http://<ip>/api/v1/example/:id
 * 
 **/ 
module.exports = router