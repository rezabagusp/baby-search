var express = require('express'),
	retrieve = require('../controllers/retrieve.controller'),
    router = express.Router();

//routing auth
router.post('/retrieving', function(req, res, next){
    retrieve.retrieving(req, res);
});


module.exports = router;
