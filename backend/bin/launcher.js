module.exports = function (express, bodyParser) {

	var app					 = express();

/*
	var favicon 			 = require('serve-favicon');
	var logger 				 = require('morgan');
	var cookieParser 		 = require('cookie-parser');

	// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');

	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(logger('dev'));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

*/

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	var port = process.env.PORT || 8080;   

	app.listen(port);
	console.log('Busca Canoas on port ' + port);

	return app;

}