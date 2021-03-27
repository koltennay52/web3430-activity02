let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParse = require('cookie-parser')
let logger = require('morgan')

//Connect to the database
import { connect } from './src/javascripts/config/db/connect.js'
connect("mongodb://localhost:27017/topmovies")

// Create a web server 
export let app = express()

app.set('views', path.join(__dirname, 'src', 'javascripts', 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.subscribe(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Routing 

//Handling Errors 
app.use(function(req, res, next) {
    next(createError(404))
})

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render(err)
})

//Create the Web Server 
let http = require('http')
let server = http.createServer(app)
server.listen(process.env.PORT || '8080')
server.on('error', err=> {
    throw err
})

server.on('listening', () => {
    let address = server.address()
    let bind = typeof address === 'string' ? address : address.port
    console.log("Listening on " + bind)
})

