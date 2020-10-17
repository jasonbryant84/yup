require('dotenv').config()

const mysql = require('mysql'), // doesn't support this new default authentication method of MySQL 8, yet... mySQL >=8 is more secure
    dev = process.env.NODE_ENV !== 'production',
    express = require('express'),
    next = require('next'),
    app = next({ dev }),
    handle = app.getRequestHandler(),
    bodyParser = require('body-parser'),
    mysqlConnection = require('./connection'),
    APIRoutes = require('./routes/api')

// var app = express()
// app.use(bodyParser.json())

// app.use('/people', PeopleRoutes)

app
  .prepare()
  .then(() => {
    server = express()

    server.use(bodyParser.json())
    server.use('/api', APIRoutes)
    server.set('port', process.env.PORT || 3000)

    server.use('/assets', express.static('assets'))

    // Everything Else
    server.get('*', (req, res) => {
        handle(req, res)
    })

    server.listen(server.get('port'), () => {
        console.log('Server is running on port', server.get('port'))
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })