var express = require('express'),
    config = require('./config.js');

var app = express();

//===============EXPRESS=================
// Configure Express
app.use(express.static(__dirname + '/public'));

app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ secret: config.secret }));

app.use(app.router);

//===============ROUTES=================
// VIEWS
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

//===============PORT=================
var port = process.env.PORT || 5000;
console.log("||||||||| PORT: " + port + " |||||||||");
app.listen(port);
