var express = require('express'),
    matakuliah = require('../controllers/matakuliah.controller'),
    router = express.Router();

//routing auth
router.get('/all', function(req, res, next){
    console.log('masuk router')
    matakuliah.getMatkul(req, res);
});

router.get('/history-matkuls', function(req, res, next){
    console.log('masuk history mata kuliah')
    matakuliah.getHistoryMatkuls(req, res);
});


module.exports = router;
