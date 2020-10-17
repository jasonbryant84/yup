const express = require('express'),
    Router = express.Router(),
    mysqlConnection = require('../connection')

Router.get('/', (req, res)=> {
    const queryString = `SELECT * from testing`
    mysqlConnection.query(queryString, (err, rows, fields) => {
        if(!err) {
            res.send(rows)
        } else {
            console.error(err)
        }
    })
})

Router.post('/', (req, res)=> {
    const queryString = `UPDATE Yup . testing SET firstname = '${req.body.firstname}', lastname = '${req.body.lastname}' WHERE id = ${req.body.id};`

    mysqlConnection.query(queryString, (err, rows, fields) => {
        if(!err) {
            res.send(rows)
        } else {
            console.error(err)
        }
    })
})

module.exports = Router