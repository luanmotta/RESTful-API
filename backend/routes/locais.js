module.exports = function (app, express, router) {


	var Bear       = require('./../models/bear.js');

	var mongoose   = require('mongoose');
	mongoose.connect('mongodb://luanmotta:97334676@ds017193.mlab.com:17193/luanmotta_db');


	router.route('/locais')

		.post(function(req, res) {
	        
	        var bear = new Bear();

	        bear.name = req.body.name; 
			bear.address = req.body.address;
			
	        bear.save(function(err) {

	        	if (err) {
					res.send(err);
				} else {
					res.json({ message: 'local criado' });
				}  
	        }); 
	    })



	    .get(function(req, res) {
	        Bear.find(function(err, bears) {
	            if (err) res.send(err);

	            res.json(bears);
	        });
	    })

	;




	router.route('/:bear_id')

   
	    .get(function(req, res) {
	        Bear.findById(req.params.bear_id, function(err, bear) {
	            if (err)
	                res.send(err);
	            res.json(bear);
	        });
	    })


	    .put(function(req, res) {

	        
	        Bear.findById(req.params.bear_id, function(err, bear) {

	            if (err)
	                res.send(err);

	            bear.name = req.body.name; 

	            bear.save(function(err) {
	                if (err)
	                    res.send(err);

	                res.json({ message: 'local atualizado' });
	            });

	        });
	    })



	    .delete(function(req, res) {
	        Bear.remove({
	            _id: req.params.bear_id
	        }, function(err, bear) {
	            if (err)
	                res.send(err);

	            res.json({ message: 'local deletado' });
	        });
	    })

    ;



	return router;

}
