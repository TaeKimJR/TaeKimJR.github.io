var express = require('express'),
    config = require('./config.js'),
    processingResult = require('./processing_result.js'),
    sendgrid  = require('sendgrid')(config.SEND_GRID_API_KEY);

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

app.post('/contact', function (req, res, next){
  var result = new processingResult.ProcessingResult();

  var contactName = req.body.contactName;
  var contactEmail = req.body.contactEmail;
  var contactMessage = req.body.contactMessage;

  var emailBody = "Name: " + contactName + " \n" +
  	"Email: " + contactEmail + " \n" +
  	"Message: " + contactMessage + " \n";

  var payload   = {
	  to      : config.SEND_GRID_TO_EMAIL,
	  from    : config.SEND_GRID_FROM_EMAIL,
	  subject : 'TKJR Contact Message!!!',
	  text    : emailBody
	}

	sendgrid.send(payload, function(err, json) {
	  if (err) { 
	  	result.isSuccessful = false;
	  	result.errorMessage = err;
	  }
	});

	res.send(result);
});

//===============PORT=================
var port = process.env.PORT || 5000;
console.log("||||||||| PORT: " + port + " |||||||||");
app.listen(port);
