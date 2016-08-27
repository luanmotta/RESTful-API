module.exports = function (app, express, router) {

	/* GET Home page. */
	router.get('/', function(req, res, next) {
	  res.send("Busca Canoas");
	});

	return router;

}
