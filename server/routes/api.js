const express = require('express'),
    Router = express.Router(),
    mysqlConnection = require('../connection')

// Return proper resposne values: 200, 201, 404, etc

// Crud
Router.post('/', (req, res)=> {
    console.log(req.body)
    const getLastRow = (req, res) => {
        const queryString = `SELECT * FROM testing ORDER BY id DESC LIMIT 1;`

        // error handling check against req.body.textMsg
        mysqlConnection.query(queryString, (error, rows) => {
            if(!error) {
                res
                    .status(200)
                    .send(rows)
            } else {
                res
                    .status(404)
                    .send({
                        error
                    })
            }
        })
    }
    
    // messages 
    const queryString = `INSERT INTO \`Yup\`.\`testing\` (\`id\`, \`text\`, \`sender\`, \`uuid\`) VALUES (NULL, '${req.body.textMsg}', '${req.body.sender}', '${req.body.uuid}');`
    mysqlConnection.query(queryString, (error) => {
        if(!error) {
            getLastRow(req, res)
        } else {
            console.log('error', error)
            res
                .status(404)
                .send({
                    error
                })
        }
    })
})

// cRud
Router.get('/', (req, res)=> {
    const queryString = `SELECT * from testing`
    mysqlConnection.query(queryString, (error, rows, fields) => {
        if(!error) {
            res
                .status(200)
                .send(rows)
        } else {
            res
                .status(404)
                .send({
                    error
                })
        }
    })
})

// crUd (PATCH used for partial updates but using PUT here as currently updating all fields in MySQL db)
Router.put('/', (req, res)=> {
    const queryString = `UPDATE \`Yup\`.\`testing\` SET firstname = '${req.body.firstname}', lastname = '${req.body.lastname}' WHERE id = ${req.body.id};`

    mysqlConnection.query(queryString, (error, rows, fields) => {
        if(!error) {
            res
                .status(200)
                .send(rows)
        } else {
            res
                .status(404)
                .send({
                    error
                })
        }
    })
})


// cruD
Router.delete('/', (req, res)=> {
    // AND UPDATE AUTO INCREMENT VALUES
    const queryString = 
        `DELETE FROM \`Yup\`.\`testing\` WHERE (\`id\` = '${req.body.id}');
        ALTER TABLE \`Yup\`.\`testing\` AUTO_INCREMENT=1`
    
    mysqlConnection.query(queryString, (error, rows, fields) => {
        if(!error) {
            res
                .status(200)
                .send(rows)
        } else {
            res
                .status(404)
                .send({ error })
        }
    })
})

module.exports = Router

// https://restfulapi.net/http-methods/