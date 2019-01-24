

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '127.0.0.1';
// Listen on a specific port via the PORT environment variable
var port = 8081;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});




/*

const morgan = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')

var app = express()
var server = require('http').createServer(app)

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/cities', require('./route'))
app.use('api/coordinates',require('./route'))

app.get('*', (req, res) => {
	res.send("Base API")
})




server.listen(process.env.PORT || '8070');
console.log('Server Running on port 8070'); */