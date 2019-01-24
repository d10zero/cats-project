var express = require('express')
var router = express.Router()

const request = require('request')
//const BASE_URL = "https://developers.zomato.com/api/v2.1/cities?q="
const BASE_URL = "https://api.darksky.net/forecast/08867eac5f8023d58edb187c8d2228c1/"


//ZOMATO
//const USER_KEY = "1f250f772d4689de756a40e9b280592a"

function handler(req, res) {
	var data = {}

	var options = {
		url: BASE_URL + req.params.lat + ',' + req.params.long
	} 

	request(options, function(error, response, body){
		if (!error && response.statusCode == 200) {
			var data = JSON.parse(body)
			console.log(data)

			res.status(200).send(data)
		}
	})
}

router.get('/search/:lat/:long', handler)

module.exports = router