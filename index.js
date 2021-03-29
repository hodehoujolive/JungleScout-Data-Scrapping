var unirest = require("unirest");

var req = unirest("GET", "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search");

req.query({
	"keyword": "A",
	"page": "2",
	"country": "US",
	"category": "aps"
});

req.headers({
	"x-rapidapi-key": "1eac30d5eemshacc78b32c1989e3p1189cajsn1c2f75b4c8a5",
	"x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});