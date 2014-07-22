var express = require('express'),
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  app = express();


var articlesArray = [];

app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');

app.get('/articles/new', function(req, res) {
	res.render("article_form")
});

app.get('/articles/:id', function(req, res){
	var index = req.params.id;
	var articleEntry = articlesArray[index];
	console.log(articleEntry);
	res.render("index", {article: articleEntry})
})

app.post('/articles', function(req, res){
	console.log(req.body.article);
	articlesArray.push(req.body.article);
	res.redirect('/articles');
});

app.get('/articles', function(req, res){
  	res.send(articlesArray)
});

app.get('/', function(req, res){
	res.render("article_form")
});

app.get('/about', function(req, res){
	res.render("about")
});

app.get('/contact', function(req, res){
	res.render("contact")
});



app.listen(3000, function(){
  console.log("SERVER STARTED ON localhost:3000");
});

