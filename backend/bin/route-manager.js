module.exports = function (app, express) {


	var router = express.Router();

	var index  = require('./../routes/index.js');

	var locais = require('./../routes/locais.js');


	router.use(function(req, res, next) {
	    console.log('Something is happening.');
	    next();
	});


	app.use('/', index(app, express, router));

	app.use('/locais', locais(app, express, router));

}