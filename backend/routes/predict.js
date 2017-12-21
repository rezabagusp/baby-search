var express = require('express'),
	predict = require('../controllers/predict.controller'),
    router = express.Router();

//routing auth
router.get('/predict', function(req, res, next){
    predict.predict(req, res);
});


module.exports = router;
